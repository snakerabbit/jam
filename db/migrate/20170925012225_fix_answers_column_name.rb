class FixAnswersColumnName < ActiveRecord::Migration[5.1]
  def change
    rename_column :answers, :answer_body, :body
  end
end
