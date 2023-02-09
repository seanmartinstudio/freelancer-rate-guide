class Industry < ApplicationRecord
    has_many :jobs
    has_many :users, through: :jobs
    has_many :companies, through: :jobs
end
