class User < ApplicationRecord
    has_one_attached :avatar do |attachable|
        attachable.variant :thumb, resize_to_limit: [100, 100]
    end

    has_many :jobs
    has_many :companies, through: :jobs
    has_many :industries, through: :jobs
    has_secure_password
    validates :username, presence: true, uniqueness: true, length: { in: 6..20 }
    validates :password, presence: true, length: { in: 8..64 }
    validates :email, presence: true, uniqueness: true, :email_format => { :message => "not valid" }
end
