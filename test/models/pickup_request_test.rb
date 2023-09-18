require "test_helper"

class PickupRequestTest < ActiveSupport::TestCase
  test "can schedule a pickup request on a date & location" do
    assert_changes -> { PickupRequest.count } do
      PickupRequest.create!(date: Date.today, address_attributes: {address_1: '123 main st', city: 'Denver', state: 'CO', zip: '80203'})
    end
  end

  test "creating a new pickup request sets the status to scheduled" do
    pickup_request = PickupRequest.create!(date: Date.today, address_attributes: {address_1: '123 main st', city: 'Denver', state: 'CO', zip: '80203'})
    assert_equal pickup_request.status, 'scheduled'
  end
end
