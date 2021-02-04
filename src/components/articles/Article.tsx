import React from 'react';
import { Article as ArticleType } from '../../types';

export default function Article({
  article,
}: {
  article: ArticleType;
}): JSX.Element {
  return (
    <li>
      <h1>
        <a href={article.webUrl}>{article.webTitle}</a>
      </h1>
    </li>
  );
}
