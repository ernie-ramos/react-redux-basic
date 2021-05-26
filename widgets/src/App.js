import React from 'react';
import Search from './Components/Search';
// import Accordion from './Components/Accordion';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework.',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers.',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components.',
  },
];

export default () => {
  return (
    <div>
      <Search />
    </div>
  );
};