class JobSerializer < ActiveModel::Serializer
  attributes :id, :job_title, :job_description, :rate, :experience


  belongs_to :industry
  belongs_to :company
  belongs_to :user

end
