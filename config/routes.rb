Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users do
      collection do
        get 'filter'
      end
    end
    resource :session

    resources :questions, only: [:index, :create, :destroy]
    resources :answers, only: [:create, :destroy, :show, :index, :update]

  end
  root "static_pages#root"
end
