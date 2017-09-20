class ChangeColumnNullUsers < ActiveRecord::Migration[5.1]
  def change
    change_column_null :users, :image_url, true
    change_column_null :users, :instrument, true
    change_column_null :users, :looking_for, true
    change_column_null :users, :city, true
  end
end
