class CreateEmails < ActiveRecord::Migration[5.2]
  def change
    create_table :emails do |t|
      t.string :email

      t.timestamps
    end
    add_index :emails, :email, unique: true
  end
end
