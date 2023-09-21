class PickupRequestsController < ApplicationController

  def index
    @pickup_requests = PickupRequest.all.includes(:customer, :address)
  end

  def create
    pickup_request = PickupRequest.new(pickup_request_params)

    if pickup_request.save
      head :ok
    else
      render json: { errors: pickup_request.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def pickup_request_params
    params.require(:pickup_request).permit(:date, address_attributes: [:address_1, :address_2, :city, :state, :zip], customer_attributes: [:name])
  end
end
