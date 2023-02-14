class JobsController < ApplicationController
  # require 'byebug'

    #HomePage Endpoint
    def index 
      jobs = Job.all 
      render json: jobs
    end

    #PostJobPage Endpoint
    def create 
      user = User.find_by(id: session[:user_id])
      if user
          job = user.jobs.create(create_job_params)
          render json: job, status: :created
      else
          render json: { errors: ["Not Authorized"] }, status: :unauthorized
      end

      
  end


  private


  def create_job_params
    params.permit(:job_title, :job_description, :rate, :experience, :industry_id, :company_id)
  end

end


  

