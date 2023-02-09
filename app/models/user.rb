class User < ApplicationRecord
    has_many :jobs
    has_many :companies, through: :jobs
    has_many :industries, through: :jobs
    has_secure_password
    validates :username, presence: true, uniqueness: true, length: { in: 6..20 }
    validates :password, presence: true, length: { in: 8..64 }
    validates :email, :email_format => { :message => "not valid" }
end
