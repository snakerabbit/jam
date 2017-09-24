Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users do
      collection do
        get 'filter'
      end
    end
    resource :session
  end
  root "static_pages#root"
end
