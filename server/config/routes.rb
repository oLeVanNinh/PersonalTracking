Rails.application.routes.draw do
  get 'task/index', to: "task#index"
  post 'task/create', to: "task#create"
  post 'task/update', to: "task#update"
  delete 'task/destroy', to: "task#delete"
end
