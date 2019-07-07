class TaskController < ApplicationController
  def index
    tasks = Task.all
    tasks = format_response(tasks)

    render json: {tasks: tasks}
  end

  def create
    task = Task.new(task_params)

    if task.save
      render json: {status: "success", taks: task}
    else
      render json: {status: "false"}
    end
  end

  private

  def task_params
    params.require(:task).permit(:name, :total_time, :start_date, :end_date)
  end

  def format_response(tasks)
    tasks.map do |task|
      start_date = task.start_date.strftime("%d/%m/%Y")
      end_date = task.end_date.strftime("%d/%m/%Y")
      spent_time = task.spent_time.nil? ? 0 : task.spent_time
      remain_time = task.total_time - spent_time
      day_between = (task.end_date.to_date - task.start_date.to_date).to_i
      average_time = remain_time.to_f / day_between

      {
        id: task.id,
        name: task.name,
        start_date: start_date,
        end_date: end_date,
        spent_time: spent_time,
        remain_time: remain_time,
        remain_day: day_between,
        average_time: average_time
      }
    end
  end
end
