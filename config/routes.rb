Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"


  scope constraints: lambda { |req| req.format == :json } do
    resources :pickup_requests, only: [:index, :create]
  end

  get "*path" => 'application#index'
  root to: 'application#index'
end
