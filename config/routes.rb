Rails.application.routes.draw do
  
  resources :companies
  resources :industries
  resources :jobs
  resources :users
  resources :sessions
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  #USERS
  root "users#index"
  get '/me', to: 'users#show'
  get 'logged_user', to: 'users#logged_user'
  get 'avatar', to: 'users#avatar'
  post '/add_avatar/:id', to: 'users#add_avatar'

  #SESSIONS
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  #JOBS
  get '/jobs_search/:string', to: 'jobs#search', as: 'search'
  get '/user_jobs', to: 'jobs#search_by_user', as: 'search_by_user'
  get '/jobs/filter/:jobtitle/:rate', to: 'jobs#filter', as: 'filter'

  
  #Handles URL routing when deployed
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
 
end
