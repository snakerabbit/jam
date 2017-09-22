class AddColumnsToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :about_me, :text
    add_column :users, :fave_bands, :text
    add_column :users, :fave_genres, :text
    add_column :users, :purpose, :text
  end
end
