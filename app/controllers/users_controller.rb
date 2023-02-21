class UsersController < ApplicationController
  # require 'byebug'

    #SignupForm end point
    #POST '/signup'
    def create 
        user = User.create(user_params)
        if user.valid?
          render json: user, except:[:password], status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unauthorized
        end
    end

    # def avatar 
    #   user = User.find_by(user_id: session[:user_id])
    #   user.avatar.attach(params[:avatar])
    # end

  #UserJobs Endpoint
  def index
    user = User.find_by(id: session[:user_id])
    if user
      render json: user.jobs.reverse_order
    end
  end

  private

  def user_params
      params.permit(:username, :password, :email, :avatar)
  end

end
