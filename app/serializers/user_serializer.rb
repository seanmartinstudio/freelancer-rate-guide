class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  
  has_many :jobs
  has_many :companies, through: :jobs
  has_many :industries, through: :jobs
end
