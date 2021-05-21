import React from 'react';
import faker from 'faker';

const CommentDetail = () => {
  const avatar = faker.image.avatar();
  const firstName = faker.name.firstName();
  const date = new Date(faker.datatype.datetime()).toLocaleDateString('en-US', {
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
  });
  const content = faker.lorem.sentence();

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
