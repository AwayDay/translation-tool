import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { selectAll } from '../repositories/ArticleStore';
import { Article } from '../types/ArticleTypes';

const ListPage: React.FunctionComponent = () => {
  const init: Article[] = [];
  const [articles, useArticles] = useState(init);

  useEffect(() => {
    selectAll(articles => useArticles(articles));
  });
  
  return (
    <main>
      {articles.map(a => (
        <Link to={`/translator`} state={{ articleId: a.id }}>
          {a.title.original}
        </Link>
      ))}
      <Link to={`/new`}>NEW</Link>
    </main>
  );
};

export default ListPage;
