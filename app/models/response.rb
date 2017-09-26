# == Schema Information
#
# Table name: responses
#
#  id               :integer          not null, primary key
#  answer_id        :integer          not null
#  user_id          :integer          not null
#  accepted_answers :string           default([]), not null, is an Array
#  importance       :integer
#  explanation      :text
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Response < ApplicationRecord
  validates :answer_id, :user_id, presence: true

  belongs_to :user

  belongs_to :answer

  has_one :question,
  through: :answer,
  source: :question

end
