class Company < ApplicationRecord
    has_many :jobs
    has_many :industries, through: :jobs
    has_many :users, through: :jobs

    validates :company_size, presence: true
end
