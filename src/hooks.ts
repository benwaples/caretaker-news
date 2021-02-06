import { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-named-as-default
import getArticles from './services/guardianApi';
import { Response, UseArticleHook } from './types';

const useArticles = (): UseArticleHook => {
  const [query, setQuery] = useState('Sports');
  const [page, setPage] = useState(1);
  const [response, setResponse] = useState<Response>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getArticles(query, page)
      .then((articles) => articles && setResponse(articles))
      .then(() => setLoading(false));
  }, [query, page]);

  return {
    query,
    page,
    response,
    loading,
    setPage,
    setQuery,
  };
};

export default useArticles;
