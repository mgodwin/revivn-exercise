import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {Link} from 'react-router-dom';


export const IndexPage = () => {
  const {data} = useQuery({
    queryKey: ['pickupRequests'],
    queryFn: async () => {
      const response = await fetch('/pickup_requests.json');
      const json = await response.json();
      return json.pickup_requests;
    }
  })
  return (
      <>
        <h1>
          <div>
            Pickup Requests
          </div>

        </h1>
        <div>
          <Link to="/pickup_requests/new" role="button">Create New Pickup Request</Link>
        </div>
        <table>
          <thead>
          <td>Customer</td>
          <td>Date</td>
          <td>Address</td>
          <td>Status</td>
          <td></td>
          </thead>
          <tbody>
          {data && data.map((request) => (<tr>
            <td>{request.customer_name}</td>
            <td>{request.date}</td>
            <td>{request.full_address}</td>
            <td>{request.status}</td>
            <td><Link to={`/pickup_requests/${request.id}`}>View</Link></td>
          </tr>))}
          </tbody>
        </table>
      </>
  )
}