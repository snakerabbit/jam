# == Schema Information
#
# Table name: answers
#
#  id          :integer          not null, primary key
#  answer_body :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  question_id :integer
#

class Answer < ApplicationRecord
  validates :answer_body, :question_id, presence: true

  has_many :user_answers
  belongs_to :question
end