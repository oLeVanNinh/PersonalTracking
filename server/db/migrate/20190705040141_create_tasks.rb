class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :name
      t.integer :total_time
      t.integer :spent_time
      t.datetime :start_date
      t.datetime :end_date

      t.timestamps
    end
  end
end
