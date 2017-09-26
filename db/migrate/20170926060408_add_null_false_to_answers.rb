class AddNullFalseToAnswers < ActiveRecord::Migration[5.1]
  def change
    change_column :answers, :question_id, :integer, null: false
  end
end
