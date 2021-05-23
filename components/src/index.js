import React from 'react';
import ReactDOM from 'react-dom';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const { avatar, firstName, date, content } = require('./FakerAPI');

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          avatar={avatar()}
          firstName={firstName()}
          date={date()}
          content={content()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={avatar()}
          firstName={firstName()}
          date={date()}
          content={content()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={avatar()}
          firstName={firstName()}
          date={date()}
          content={content()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
