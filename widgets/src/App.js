import React, { useState } from 'react';
import Dropdown from './Components/Dropdown';
// import Search from './Components/Search';
// import Accordion from './Components/Accordion';

// const items = [
//   {
//     title: 'What is React?',
//     content: 'React is a front end javascript framework.',
//   },
//   {
//     title: 'Why use React?',
//     content: 'React is a favorite JS library among engineers.',
//   },
//   {
//     title: 'How do you use React?',
//     content: 'You use React by creating components.',
//   },
// ];

const options = [
  { label: 'The Color Red', value: 'red' },
  { label: 'The Color Green', value: 'green' },
  { label: 'A Shade of Blue', value: 'blue' },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );
};
