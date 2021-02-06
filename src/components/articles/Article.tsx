import React, { useEffect, useState } from 'react';
import notFound from '../../services/notFound';
import { Article as ArticleType } from '../../types';
import './article.scss';

export default function Article({
  fields,
  webTitle,
  webUrl,
}: ArticleType): JSX.Element {
  const [src, setSrc] = useState<string>();

  const imageSrc = fields?.thumbnail ? fields.thumbnail : notFound;

  useEffect(() => setSrc(imageSrc), [imageSrc]);

  return (
    <li className="article">
      <h3>{webTitle}</h3>
      <img src={src} alt={webTitle} onError={() => setSrc(notFound)} />
      <a href={webUrl} target="_blank" rel="noreferrer">
        Go to article
      </a>
    </li>
  );
}
