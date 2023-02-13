class CompaniesController < ApplicationController

    #PostJobPage Endpoint
    def index 
        companies = Company.all 
        render json: companies
    end
end
