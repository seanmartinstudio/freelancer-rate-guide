class JobsController < ApplicationController
  require 'byebug'

    #READ
    #HomePage endpoint
    def index 
      jobs = Job.all 
      render json: jobs.reverse_order
    end


    #SHOW
    #Potential new HomePage endpoint
    def search
      title = params[:string].titleize
      jobs = Job.where(job_title: title) 
      render json: jobs
    end

    #SHOW

    #CREATE
    #PostJobPage endpoint
    def create 
        user = User.find_by(id: session[:user_id])
        if user
            job = user.jobs.create(create_job_params)
              if job.valid?
                render json: job, status: :created
              else
                render json: { errors: job.errors.full_messages }, status: :unauthorized
              end
        else
            render json: { errors: ["Not Authorized"] }, status: :unauthorized
        end
    end

    #UPDATE
    #EditJobForm endpoint
    def update
      user = User.find_by(id: session[:user_id])
      if user
          user_id = user.id
          job = Job.find_by(id: params[:id])
          if job.user_id == user_id
              job.update(update_job_params)
                if job.valid?
                  render json: job
                else
                  render json: { errors: job.errors.full_messages }, status: :unauthorized
                end
          else
              render json: { error: "Not Found" }, status: :not_found
          end
      else
          render json: { errors: ["Not Authorized"] }, status: :unauthorized
      end
    end

    #DESTROY
    def destroy 
      user = User.find_by(id: session[:user_id])
      if user
          user_id = user.id
          job = Job.find_by(id: params[:id])
          if job.user_id == user_id 
              job.destroy
              head :no_content
          else
              render json: { error: ["Not Found"] }, status: :not_found
          end
      else
          render json: { errors: ["Not Authorized"] }, status: :unauthorized
      end
    end

    
  


  private

  def update_job_params
    params.permit(:job_title, :job_description, :rate, :experience, :industry_id, :company_id)
  end


  def create_job_params
    params.permit(:job_title, :job_description, :rate, :experience, :industry_id, :company_id)
  end

end


  

