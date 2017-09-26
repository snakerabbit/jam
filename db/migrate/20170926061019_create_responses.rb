class CreateResponses < ActiveRecord::Migration[5.1]
  def change
    create_table :responses do |t|
      t.integer :answer_id, null: false
      t.integer :user_id, null: false
      t.string :accepted_answers, default:[], null: false, array: true
      t.integer :importance
      t.text :explanation
      t.timestamps
    end
  end
end
