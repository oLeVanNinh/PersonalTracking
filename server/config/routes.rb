Rails.application.routes.draw do
  get "/task/index", to: "task#index"
  post "/task/create", to: "task#create"
  post "/logging_time/create", to: "logging_time#create"
  post "/upload", to: "task#upload"
end
