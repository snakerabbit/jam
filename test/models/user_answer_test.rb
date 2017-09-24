# == Schema Information
#
# Table name: user_answers
#
#  id               :integer          not null, primary key
#  user_id          :integer          not null
#  answer_id        :integer          not null
#  question_id      :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  accepted_choices :string           default([]), is an Array
#  importance       :integer
#  explanation      :text
#

require 'test_helper'

class UserAnswerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
