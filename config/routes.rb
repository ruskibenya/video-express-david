Rails.application.routes.draw do
  get '/', to: 'watch_party#home'
  get '/party', to: 'watch_party#party'
  post 'login', to: 'watch_party#login'
end
