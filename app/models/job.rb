class Job < ApplicationRecord
    belongs_to :user
    belongs_to :industry
    belongs_to :company
    validates :job_description, presence: true, length: { maximum: 300 }
end
