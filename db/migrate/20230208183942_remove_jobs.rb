class RemoveJobs < ActiveRecord::Migration[6.1]
  def change
    drop_table :jobs
  end
end
