class Contact < ApplicationRecord
  validates(:subject, presence: true)
  validates(:name, presence: true)

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  validates(:email, presence: true, format: { with: VALID_EMAIL_REGEX })
  validates(:body, presence: true)
end


