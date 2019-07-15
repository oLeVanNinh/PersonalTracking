class AddDateToLoggingTime < ActiveRecord::Migration[5.2]
  def change
    add_column :logging_times, :date, :datetime
  end
end
