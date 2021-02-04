import React from 'react';
import { Article as ArticleType } from '../../types';
import Article from './Article';

export default function ArticleList({
  articles,
}: {
  articles: ArticleType[];
}): JSX.Element {
  const articleElements = articles.map((article: ArticleType) => (
    <Article key={article.id} article={article} />
  ));

  return <ul>{articleElements}</ul>;
}
