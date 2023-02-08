Rails.application.routes.draw do
  
  resources :companies
  resources :industries
  resources :jobs
  resources :users
  resources :sessions
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  #USERS
  root "users#index"
  get '/me', to: 'users#show'

  #SESSIONS
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
end
