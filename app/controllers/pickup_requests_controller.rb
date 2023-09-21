class PickupRequestsController < ApplicationController

  def index
    @pickup_requests = PickupRequest.all
  end

  def create
    pickup_request = PickupRequest.new(pickup_request_params)

    respond_to do |format|
      if pickup_request.save
        format.json { head :ok }
      else
        format.json { render json: { errors: pickup_request.errors.full_messages }, status: :unprocessable_entity }
      end
    end
  end

  private

  def pickup_request_params
    params.require(:pickup_request).permit(:date, address_attributes: [:address_1])
  end
end
