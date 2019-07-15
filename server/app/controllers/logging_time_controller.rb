class LoggingTimeController < ApplicationController
  def create
    logging_time = LoggingTime.new(logging_time_param)

    if logging_time.save
      render json: {status: "success"}
    else
      render json: {status: "false"}
    end
  end

  private

  def logging_time_param
    params.require(:logging_time).permit(:task_id, :date, :spent_time)
  end
end