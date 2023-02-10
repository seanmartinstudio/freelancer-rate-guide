class JobsController < ApplicationController

        #GET '/all'
    def index 
      jobs = Job.all 
      render json: jobs

    end
  
end
