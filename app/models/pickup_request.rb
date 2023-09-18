class PickupRequest < ApplicationRecord
  belongs_to :address
  accepts_nested_attributes_for :address

  has_many :pickup_request_activities

  validates :date, presence: true

  before_create :set_status_to_scheduled

  private

  def set_status_to_scheduled
    # Consider options for constantizing list of statuses to avoid magic strings
    self.status = 'scheduled'
  end
end
