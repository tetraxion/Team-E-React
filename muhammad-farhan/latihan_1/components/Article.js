import React from 'react';

function Article({ title, content }) {
  return (
    <div className="article">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default Article;
