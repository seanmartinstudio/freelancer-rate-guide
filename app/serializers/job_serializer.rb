class JobSerializer < ActiveModel::Serializer
  attributes :id, :job_title, :job_description, :rate

  # belongs_to :user
  belongs_to :industry
  belongs_to :company

end
