class JobsController < ApplicationController
  # require 'byebug'

    #READ
    #HomePage endpoint
    def index 
      jobs = Job.all 
      render json: jobs.reverse_order
    end


  #   #SHOW
  #   #Potential new HomePage endpoint
  #   def search
  #     title = params[:string].titleize
  #     if title == "All"
  #       jobs_all = Job.all.reverse_order
  #       render json: jobs_all
  #     else
  #       jobs = Job.where(job_title: title) 
  #       render json: jobs.reverse_order
  #   end
  # end

    #GET
    #HomePage endpoint
    def filter 
      job_param = params[:jobtitle].titleize
      rate_param = params[:rate].to_f
      if job_param == "All"
        jobs_all = Job.all.reverse_order
        jobs_all_matches = jobs_all.filter { |job| job.rate <= rate_param }
        render json: jobs_all_matches
      else
        jobs = Job.where(job_title: job_param).reverse_order
        job_matches = jobs.filter { |job| job.rate >= rate_param }
        render json: job_matches
      end
    end

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


  

