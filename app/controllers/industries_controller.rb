class IndustriesController < ApplicationController
# require 'byebug'
    #PostJobPage Endpoint
    def index 
        industries = Industry.all 
        render json: industries
    end
end
