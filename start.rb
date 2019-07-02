require 'pry'

class Procfile
  attr_reader :entries

  def initialize(filename = "Procfile")
    @entries = []

    load filename
  end

  def load(filename)
    entries.replace  load_procfile(filename)
  end

  def load_procfile(filename)
    File.read("#{Dir.pwd}/#{filename}").split("\n").map do |line|
      if line.match(/^([A-Za-z0-9]+):\s*(.+)$/)
        [$1, $2]
      end
    end.compact
  end
end

class Processor
  attr_reader :command
  attr_reader :cwd

  def initialize(command, cwd)
    @command = command
    @cwd = cwd
  end

  def run
    Dir.chdir(cwd) do
      Process.spawn command
    end
  end
end


class ScriptStart
  class << self
    def start
      new.start
    end
  end

  def initialize
    @names = {}
    @processes = []
    @running = []
    @shutdown = false
  end

  def start
    register_interrupt_signal
    load_procfile_and_set_up
    spawn_process
    wait_for_shutdown_or_child_termination
    kill_all_child_process
  end

  def register_interrupt_signal
    trap("INT") do
      handle_interrupt
    end
  end

  def load_procfile_and_set_up
    Procfile.new.entries.each do |name, command|
      @names[name] = Processor.new(command, "#{Dir.pwd}/#{name}")
      @processes << @names[name]
    end
  end

  def spawn_process
    @processes.each do |process|
      @running << process.run
    end
  end

  def wait_for_shutdown_or_child_termination
    loop do
      break if @shutdown

      begin
        sleep 1
      rescue Exception
      end
    end
  end

  def handle_interrupt
    puts "SIGINT received, starting shutdown"
    @shutdown = true
  end

  def kill_all_child_process
    @running.each do |pid|
      Process.kill("HUP", pid)
    end
  end
end

ScriptStart.start