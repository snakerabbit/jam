class CreateUserAnswers < ActiveRecord::Migration[5.1]
  def change
    create_table :user_answers do |t|
      t.integer :user_id, null: false
      t.integer :answer_id, null: false
      t.integer :question_id, null: false
      t.timestamps
    end
  end
end
