import React, { useEffect, useState } from 'react';
import notFound from '../../services/notFound';
import { Article as ArticleType } from '../../types';
import './article.scss';

export default function Article({
  article,
}: {
  article: ArticleType;
}): JSX.Element {
  const [src, setSrc] = useState<string>();

  const imageSrc = article?.fields?.thumbnail
    ? article.fields.thumbnail
    : notFound;

  useEffect(() => setSrc(imageSrc), [imageSrc]);

  return (
    <li className="article">
      <h3>{article.webTitle}</h3>
      <img src={src} alt={article.webTitle} onError={() => setSrc(notFound)} />
      <a href={article.webUrl} target="_blank" rel="noreferrer">
        Go to article
      </a>
    </li>
  );
}
