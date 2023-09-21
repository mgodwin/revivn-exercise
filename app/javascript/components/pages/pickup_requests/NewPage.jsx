import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

export const NewPage = () => {

  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const csrfParam = document.querySelector('meta[name="csrf-param"]');
    const csrfToken = document.querySelector('meta[name="csrf-token"]');
    if (!csrfToken || !csrfParam) throw new Error('No CSRF token available!');
    const formData = new FormData(e.currentTarget);
    formData.set(csrfParam.getAttribute('content'), csrfToken.getAttribute('content'));
    fetch('/pickup_requests.json', {method: 'POST', body: formData}).then((res) => {
      console.log(res.status)
      if (res.status === 422) {
        res.json().then((json) => {
          setErrors(json.errors)
        })
      } else if (res.status === 200) {
        console.log('redirecting')
        navigate('/');
      }
    })
  }

  return (
      <>
        <h2>Create a Pickup Request</h2>
        {errors.length > 0 && <div>
          <p>Please fix the following errors:</p>
          <ul>{errors.map(e => <li>{e}</li>)}</ul>
        </div>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="pickup_request_name">Customer Name</label>
          <input type="text" id="pickup_request_name" name="pickup_request[customer_attributes][name]" required={true} />
          <label htmlFor="pickup_request_date">Date</label>
          <input type="date" id="pickup_request_date" name="pickup_request[date]" required={true} />
          <label htmlFor="pickup_request_address_1">Address 1</label>
          <input type="text" id="pickup_request_address_1" name="pickup_request[address_attributes][address_1]" required={true} />
          <label htmlFor="pickup_request_address_2">Address 2</label>
          <input type="text" name="pickup_request[address_attributes][address_2]" />
          <label htmlFor="pickup_request_address_city">City</label>
          <input type="text" name="pickup_request[address_attributes][city]" required={true} />
          <label htmlFor="pickup_request_address_state">State</label>
          <input type="text" name="pickup_request[address_attributes][state]" required={true} />
          <label htmlFor="pickup_request_address_zip">Zip</label>
          <input type="text" name="pickup_request[address_attributes][zip]" required={true} />
          <button>Submit</button>
        </form>
      </>
  )
}