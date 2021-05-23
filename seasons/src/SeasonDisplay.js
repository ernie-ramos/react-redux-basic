import React from 'react';

const SeasonDisplay = ({ lat, err }) => {
  console.log(err);

  return <div>{lat && !err ? `Latitude: ${lat}` : `Error: ${err}`}</div>;
};

export default SeasonDisplay;
