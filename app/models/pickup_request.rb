class PickupRequest < ApplicationRecord
  belongs_to :address
  belongs_to :customer

  accepts_nested_attributes_for :address, :customer

  has_many :pickup_request_activities

  validates :date, presence: true

  before_create :set_status_to_scheduled

  delegate :address_1, :address_2, :city, :state, :zip, to: :address

  def full_address
    "#{address_1} #{address_2} #{city}, #{state} #{zip}"
  end

  private

  def set_status_to_scheduled
    # Consider options for constantizing list of statuses to avoid magic strings
    self.status = 'scheduled'
  end
end
