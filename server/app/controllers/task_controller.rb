class TaskController < ApplicationController
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
end
