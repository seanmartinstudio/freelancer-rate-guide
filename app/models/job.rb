class Job < ApplicationRecord
    belongs_to :user
    belongs_to :industry
    belongs_to :company
end
