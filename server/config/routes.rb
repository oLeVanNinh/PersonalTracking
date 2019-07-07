Rails.application.routes.draw do
  get "/task/index", to: "task#index"
  post "/task/create", to: "task#create"
end
