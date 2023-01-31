class UsersController < ApplicationController

    #Test end point to fetch all Users
    #GET '/all'
    def index 
      user = User.all 
      render json: user
    end
  
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

  #App.js end point on page load to authenticate return user.
  #If response.ok => navigate HomePage.
  #Else => navigate to LoginPage.
  #GET '/me'
  def show 
      user = User.find_by(id: session[:user_id])
      if user 
          render json: user, status: :created
      else
          render json: { error: "Not Authorized" }, status: :unauthorized
      end
  end

  private

  def user_params
      params.permit(:username, :password, :title)
  end

end
