class RemoveEmailFromEmails < ActiveRecord::Migration[5.2]
  def change
    remove_column :emails, :email, :string
  end
end
