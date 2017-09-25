class CreateConversations < ActiveRecord::Migration[5.1]
  def change
    create_table :conversations do |t|
      t.integer :user_one_id, null: false
      t.integer :user_two_id, null: false
      t.timestamps
    end
  end
end
