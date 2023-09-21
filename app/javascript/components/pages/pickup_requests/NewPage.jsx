import React from 'react';

export const CreateForm = () => {

  function handleSubmit(e) {
    e.preventDefault();

    console.log(new FormData(e.target));
  }
  return (
    <>
    <h2>Create a Pickup Request</h2>
    <form onSubmit={handleSubmit}>
      <label for="pickup_request_name">Customer Name</label>
      <input type="text" name="pickup_request[name]" />
      <label for="pickup_request_name">Customer Name</label>
      <input type="text" name="pickup_request[name]" />
      <label for="pickup_request_name">Customer Name</label>
      <input type="text" name="pickup_request[name]" />
    </form>
    </>
  )
}