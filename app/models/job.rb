class Job < ApplicationRecord
    belongs_to :user
    belongs_to :industry
    belongs_to :company
    validates :job_title, presence: true
    validates :job_description, presence: true, length: { maximum: 300 }
    validates :rate, presence: true, numericality: { less_than_or_equal_to: 500 }
    validates :experience, presence: true

end
