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



    #UserJobs Endpoint
    def index
      user = User.find_by(id: session[:user_id])
      if user
        render json: user.jobs
      end
    end

  private

  def user_params
      params.permit(:username, :password, :email)
  end

end
