import React from 'react';
import ReactDOM from 'react-dom';

import CommentDetail from './CommentDetail';

const { avatar, firstName, date, content } = require('./FakerAPI');

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        avatar={avatar()}
        firstName={firstName()}
        date={date()}
        content={content()}
      />
      <CommentDetail
        avatar={avatar()}
        firstName={firstName()}
        date={date()}
        content={content()}
      />
      <CommentDetail
        avatar={avatar()}
        firstName={firstName()}
        date={date()}
        content={content()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
