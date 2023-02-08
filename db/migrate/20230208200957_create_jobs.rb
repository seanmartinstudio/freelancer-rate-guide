class CreateJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :jobs do |t|
      t.string "job_title"
      t.string "job_description"
      t.float "rate"
      t.integer "user_id"
      t.integer "industry_id"
      t.integer "company_id"
      t.timestamps
    end
  end
end
