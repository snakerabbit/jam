# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  image_url       :string
#  instrument      :string
#  looking_for     :string
#  city            :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  about_me        :text
#  fave_bands      :text
#  fave_genres     :text
#  purpose         :text
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
