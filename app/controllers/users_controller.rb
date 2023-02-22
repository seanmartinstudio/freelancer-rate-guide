class UsersController < ApplicationController
  # require 'byebug'

    #SignupForm end point (THIS IS THE ACTIVE ONE FOR THE RECORD)
    #POST '/signup'
    # def create 
    #     user = User.create(user_params)
    #     if user.valid?
    #       render json: user, except:[:password], status: :created
    #     else
    #       render json: { errors: user.errors.full_messages }, status: :unauthorized
    #     end
    # end
    
    #HomePage end point
    def logged_user 
      user = User.find_by(id: session[:user_id])
      render json: user
    end

    #SignupForm end point
    def create 
      user = User.create(user_params)
      user.avatar.attach(params[:avatar])
      if user.valid?
        render json: user, except:[:password], status: :created
      else
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
      end
  end

  #UserJobs Endpoint
  def index
    user = User.find_by(id: session[:user_id])
    if user
      render json: user.jobs.reverse_order
    end
  end

  def avatar
    user = User.find_by(id: session[:user_id])
    avatar_url = user.avatar.url
    render json: { avatar_url: avatar_url }
  end

  private

  def user_params
      params.permit(:username, :password, :email, :avatar)
  end

end
