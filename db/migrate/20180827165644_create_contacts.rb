class CreateContacts < ActiveRecord::Migration[5.2]
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :company
      t.string :email
      t.string :website
      t.string :subject
      t.string :service
      t.string :budget

      t.timestamps
    end
  end
end
