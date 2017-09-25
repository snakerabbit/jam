# == Schema Information
#
# Table name: messages
#
#  id              :integer          not null, primary key
#  author_id       :integer          not null
#  conversation_id :integer          not null
#  body            :text             not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Message < ApplicationRecord
  validates :author_id, :conversation_id, :body, presence: true

  belongs_to :conversation

  belongs_to :author
    class_name: :User,
    primary_key: :id,
    foreign_key: :author_id

end
