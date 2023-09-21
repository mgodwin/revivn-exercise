json.pickup_requests @pickup_requests do |request|
  json.id request.id
  json.customer_name request.customer.name
  json.date request.date
  json.full_address request.full_address
  json.status request.status
end