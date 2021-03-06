# == Schema Information
#
# Table name: questions
#
#  id         :integer          not null, primary key
#  body       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Question < ApplicationRecord
  validates :body, presence: true

  has_many :answers

  has_many :responses,
  through: :answers,
  source: :responses
  
end
