# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

    require 'byebug'
    ### USER SEED DATA
    sean = User.create!(username: "Sean Martin", password: "Los Angeles", email: "sean@seanmartinstudio.com")
    charles = User.create!(username: "Charles Boyce", password: "Cambridge", email: "Charlies.Boyce@gmail.com")


    ### COMPANY SEED DATA
    Company.create!(company_size: "Micro (0 to 9 employees)" )
    Company.create!(company_size: "Small (10 to 99 employees)")
    Company.create!(company_size: "Mid-sized (100 to 999 employees)")
    Company.create!(company_size: "Large (1,000 or more employees)")
    Company.create!(company_size: "Very large (5,000 or more employees)" )

    ### INDUSTRY SEED DATA
    Industry.create!(industry_type: "Advertising")
    Industry.create!(industry_type: "Marketing")
    Industry.create!(industry_type: "Publishing")
    Industry.create!(industry_type: "Film and Television")
    Industry.create!(industry_type: "Music")
    Industry.create!(industry_type: "Fashion and Retail")
    Industry.create!(industry_type: "Architecture and Interior Design")
    Industry.create!(industry_type: "Manufacturing and Construction")
    Industry.create!(industry_type: "Healthcare")
    Industry.create!(industry_type: "Legal")
    Industry.create!(industry_type: "Consulting")

    # ### JOB SEED DATA
    Job.create!(job_title: "Graphic Design", job_description: "Commissioned by the Art Director to create a series of movie posters for the Los Angeles area.", rate: 100.00, user: sean, industry_id: 4, company_id: 5, experience: "Senior")
    Job.create!(job_title: "Graphic Design", job_description: "Created an invite for a company party", rate: 50.00, user: charles, industry_id: 9, company_id: 2, experience: "Junior")