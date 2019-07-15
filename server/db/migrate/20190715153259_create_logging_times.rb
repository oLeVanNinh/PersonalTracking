class CreateLoggingTimes < ActiveRecord::Migration[5.2]
  def change
    create_table :logging_times do |t|
      t.integer :spent_time
      t.belongs_to :task, foreign_key: true

      t.timestamps
    end
  end
end
