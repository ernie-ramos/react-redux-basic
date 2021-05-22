import React from 'react';

const CommentDetail = ({ avatar, firstName, date, content }) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {firstName}
        </a>
        <div className="metadata">
          <span className="date">{date}</span>
        </div>
        <div className="text">{content}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
