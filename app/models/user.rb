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
