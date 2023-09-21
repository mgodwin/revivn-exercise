import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { CreateForm } from "./CreateForm";
import { Link } from 'react-router-dom';


export const PickupRequestsIndexPage = () => {
  const {data} = useQuery({
    queryKey: ['pickupRequests'],
    queryFn: async () => {
      const response = await fetch('/pickup_requests.json');
      return await response.json();
    }
  })
  return (
    <h1>
      <div>
      Pickup Requests
      </div>
      <Link to="/pickup_requests/new">Create New Pickup Request</Link>
      <CreateForm />
    </h1>
  )
}