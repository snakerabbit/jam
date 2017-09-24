class AddColumnsToUserAnswers < ActiveRecord::Migration[5.1]
  def change
    add_column :user_answers, :accepted_choices, :string, default: [], array: true
    add_column :user_answers, :importance, :integer
    add_column :user_answers, :explanation, :text
  end
end
