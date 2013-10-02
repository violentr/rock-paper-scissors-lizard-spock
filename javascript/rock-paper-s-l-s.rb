require 'sinatra'

get '/' do
	erb :index
end

get '/:names' do


erb :index
end