class CreateCompanies < ActiveRecord::Migration[6.1]
  def change
    create_table :companies do |t|
      t.string "company_size"
      t.timestamps
    end
  end
end
