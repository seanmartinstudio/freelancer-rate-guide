class UsersController < ApplicationController
  require 'byebug'

    def user_all
      users = User.all
      render json: users
    end

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
      # render json: user.as_json(include: {avatar_attachment: {include: :blob}})
    end

    #SignupForm end point
    def create 
      user = User.create(user_params)
      # user.avatar.attach(params[:avatar])
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
      render json: user.jobs.reverse_order
    end
  end

  def avatar
    user = User.find_by(id: session[:user_id])
    render json: { avatar: rails_blob_path(user.avatar) }
  end

  def add_avatar
    user = User.find_by(id: params[:id])
    if user
    user.avatar.attach(params[:avatar])
    end
  end

  private

  def user_params
      params.permit(:username, :password, :email)
  end

end
