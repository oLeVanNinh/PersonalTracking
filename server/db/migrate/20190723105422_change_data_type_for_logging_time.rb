class ChangeDataTypeForLoggingTime < ActiveRecord::Migration[5.2]
  def change
    change_column :logging_times, :spent_time, :decimal, precision: 5, scale: 2
  end
end
