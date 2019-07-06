Rails.application.routes.draw do
  post "/task/create", to: "task#create"
end
