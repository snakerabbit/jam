Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users do
      collection do
        get 'filter'
      end
    end
    resource :session

    resources :questions, only: [:index, :create, :destroy]
    resources :responses, only: [:create, :destroy, :show, :index, :update]
    resources :conversations, only: [:create, :show, :index] do
      resources :messages, only: [:create, :show]
    end

  end



  root "static_pages#root"
end
