import React from 'react';

const SeasonDisplay = ({ lat, errorMessage }) => {
  return (
    <div>
      Latitude: {lat}
      <br />
      Error: {errorMessage}
    </div>
  );
};

export default SeasonDisplay;
