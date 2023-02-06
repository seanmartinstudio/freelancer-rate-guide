class SessionsController < ApplicationController
    require 'byebug'

    #LoginForm end point
    def create 
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user
        else
            render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
    end

    #LogoutForm end point
    def destroy 
        user = User.find_by(username: params[:username])
        if session[:user_id]
            session.delete :user_id
            head :no_content
        else  
            render json: { errors: ["Not Authorized"] }, status: :unauthorized
        end
    end
end
