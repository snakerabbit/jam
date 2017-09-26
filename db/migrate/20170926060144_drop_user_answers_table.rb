class DropUserAnswersTable < ActiveRecord::Migration[5.1]
  def change
    drop_table  :user_answers
  end
end
