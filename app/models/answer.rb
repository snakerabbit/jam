# == Schema Information
#
# Table name: answers
#
#  id          :integer          not null, primary key
#  answer_body :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Answer < ApplicationRecord
end
