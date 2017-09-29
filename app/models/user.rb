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

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  before_validation :ensure_session_token
  attr_reader :password

  has_many :responses

  has_many :questions,
    through: :responses,
    source: :answer

  has_many :answers,
    through: :responses,
    source: :question

  has_many :messages, {
      class_name: :Message,
      primary_key: :id,
      foreign_key: :author_id
    }

  has_many :started_conversations,
    -> {order "updated_at ASC"},
    class_name: :Conversation,
    primary_key: :id,
    foreign_key: :user_one_id


  has_many :received_conversations,
    -> {order "updated_at ASC"},
    class_name: :Conversation,
    primary_key: :id,
    foreign_key: :user_two_id



  def self.find_by_credentials(username, password)
    @user = User.find_by_username(username);
    if @user && @user.is_password?(password)
      return @user
    else
      return nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token = SecureRandom.urlsafe_base64 unless self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    return self.session_token
  end

end
