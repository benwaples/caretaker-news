import React from 'react';
import notFound from '../../services/notFound';
import { Article as ArticleType } from '../../types';

export default function Article({
  article,
}: {
  article: ArticleType;
}): JSX.Element {
  const imageSrc = article?.fields?.thumbnail
    ? article.fields.thumbnail
    : notFound;

  return (
    <li>
      <h1>
        <a href={article.webUrl}>{article.webTitle}</a>
      </h1>
      <img src={imageSrc} alt={article.webTitle} />
    </li>
  );
}
