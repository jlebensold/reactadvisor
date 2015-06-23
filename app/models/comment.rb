class Comment < ActiveRecord::Base
  belongs_to :restaurant
  validates :restaurant, presence: true
  has_ancestry
end
