Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  root 'restaurants#index'
  resources :restaurants do
    resources :comments do
      put 'upvote', to: 'comments#upvote'
    end
  end
end
