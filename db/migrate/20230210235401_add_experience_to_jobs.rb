class AddExperienceToJobs < ActiveRecord::Migration[6.1]
  def change
    add_column :jobs, :experience, :string
  end
end
