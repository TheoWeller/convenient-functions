  validates :email, presence: true
  validates :username, uniqueness: true
  validates :password, confirmation: { case_sensitive: true }


#custom validation example
validate :blast_length

def blast_length
  total_length =  self.body.length + self.promo_link.length
  amount_over = total_length - 1600
    if total_length > 1600
      errors.add(:body, "You are #{amount_over} characters over blast limit.")
    end
end
