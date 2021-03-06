import React from 'react';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: 'sun',
  },
  winter: {
    text: "Burr, it's cold!",
    iconName: 'snowflake',
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());
  const { iconName, text } = seasonConfig[season];

  return (
    <div>
      <i className={`${iconName} icon huge`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon huge`} />
    </div>
  );
};

export default SeasonDisplay;
