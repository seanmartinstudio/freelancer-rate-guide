class UsersController < ApplicationController

    def index
        users = User.all
        render json: user
      end

end
