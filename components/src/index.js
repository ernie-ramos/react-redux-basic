import React from 'react';
import ReactDOM from 'react-dom';

import CommentDetail from './CommentDetail';

const fakerAPI = require('./FakerAPI');

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        avatar={fakerAPI.avatar()}
        firstName={fakerAPI.firstName()}
        date={fakerAPI.date()}
        content={fakerAPI.content()}
      />
      <CommentDetail
        avatar={fakerAPI.avatar()}
        firstName={fakerAPI.firstName()}
        date={fakerAPI.date()}
        content={fakerAPI.content()}
      />
      <CommentDetail
        avatar={fakerAPI.avatar()}
        firstName={fakerAPI.firstName()}
        date={fakerAPI.date()}
        content={fakerAPI.content()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
