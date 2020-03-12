import React from 'react';
import { Link } from 'react-router-dom';

const TripCard = ( { trip }) => {
  return (
    <div>
      <h3>{trip.attributes.name}</h3>
      <p>{trip.attributes.start_date}</p>
      <p>{trip.attributes.end_date}</p>
      <Link to={`/trips/${trip.id}/edit`}>Edit this trip</Link>
    </div>
  )
}

export default TripCard
