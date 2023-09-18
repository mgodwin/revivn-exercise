# Revivn Exercise

## Getting Started

This project uses Rails 7 with esbuild, with ruby 3.2.x

```
bin/setup
bin/dev
```

You should be able to visit the site at http://localhost:3000

## Overview of solution

### Domain Model

Pickup Addresses
- id 
- Address 1
- Address 2
- City
- State
- Zip
- created_at
- updated_at

Pickup Request
- Id 
- Date
- Address_id # normalizing as we might frequently perform pickups from the same addresses
- Status # string
- created_at
- updated_at
  
Pickup Request Activity (Single Table Inheritance)
- Id
- pickup_request_id
- Created_at / updated_at
- type
- additional_data (JSON) # This could be used to store relevant information, notes/comments, who did a certain action, etc.

### Pickup Request Activity/Status

Potential statuses might be something like Scheduled/Picked Up/Repurposed/Refurbished/Disposal (based on the context provided for this assignment).

It’s not hard to imagine that tracking the chain of custody for a Pickup Request might be useful, for example, we might want to answer the following questions:
- “Who picked up the hardware from this customer?” 
- “If they weren’t able to pick it up, what happened?”
- "Why did the hardware end up being disposed of vs recycled?"

In that case, having the ability to attach additional information (e.g. user_id/notes) to the activity for a pickup order seems like it could be pretty useful.

Also possible we may want to just attach notes/comments to the history of a pickup request, e.g. “Customer called to figure out the status of their request.”

Displaying this information in a timeline-esque view/activity feed seems like a good pattern to allow a Director of IT to easily see what’s happened for a given pickup.

- We could go the route of a state machine and the challenge would be tracking the additional data necessary (e.g, picked_up_by_id, picked_up_at, repurposed_at) - we’d likely need to have a number of additional columns on the table.  This isn’t very flexible long term if we were to add more statuses.

Instead, for this exercise, let’s go with Single Table Inheritance (STI) which often works well for modeling the different types of activities we might see in an activity feed.

## Building it out

1. Create pickup request Create/Index Pages.
    - This would involve creating the React Pages, creating the rails API endpoints, the models and corresponding model tests/controller tests/system tests.
2. Create api for Pickup Request Activities
    - There’s enough work in modeling this, and testing that we would want to feel like we’ve nailed edge cases/status transitions.
3. Create pickup show page/activity index page/activity create form
    - Create the show page which would list off all the activities associated with the pickup request and allow you to create a new Pickup Request Activity

## App Structure

### routes
resources :pickup_requests, only: [:index, :new, :create, :show]
resources :pickup_request_activities, only: [:create]

### Controllers

Index might contain a list of pickup requests, their date, status, and Address?

Would need a link/button to create a pickup request…
-> new/create flow

Need a page to show the details/activity related to a pickup request.  

Also we’d need to be able to update the status/add a new activity.

### Testing

- Focused on unit/model tests at the bottom of the stack.
- Controller tests would be the next area to focus on.
- End-to-end tests like Rails system tests could work well for general system verification.

Run tests with `rails test`.
