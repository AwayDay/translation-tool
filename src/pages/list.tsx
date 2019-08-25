import React, { useState } from 'react';
import { Link } from 'gatsby';
import { selectAll } from '../repositories/ArticleStore';
import { Article } from '../types/ArticleTypes';

const ListPage: React.FunctionComponent = () => {
  const init: Article[] = [];
  const [articles, useArticles] = useState(init);
  selectAll(articles => useArticles(articles));
  return (
    <main>
      {articles.map(a => (
        <Link to={`/`} state={{ articleId: a.id }}>
          {a.title.original}
        </Link>
      ))}
    </main>
  );
};

export default ListPage;
