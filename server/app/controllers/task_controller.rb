class TaskController < ApplicationController
  def create
    render json: {hello: "clloud"}
  end
end
