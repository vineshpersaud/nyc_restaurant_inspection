import React from 'react';

const RestaurantCard = ({restaurant}) => (
  <div>
    <h3>{restaurant.dba}</h3>
    <p>{restaurant.violation_description}</p>
  </div>
)

export default RestaurantCard
