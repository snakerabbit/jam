# == Schema Information
#
# Table name: answers
#
#  id          :integer          not null, primary key
#  body        :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  question_id :integer          not null
#

class Answer < ApplicationRecord
  validates :body, :question_id, presence: true

  belongs_to :question

  has_many :responses
end
