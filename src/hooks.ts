import { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-named-as-default
import getArticles from './services/guardianApi';
import { Response, UseArticleHook } from './types';

const useArticles = (): UseArticleHook => {
  const [query, setQuery] = useState('Sports');
  const [page, setPage] = useState(1);
  const [response, setResponse] = useState<Response>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    setLoading(true);
    getArticles(query, page)
      .then((articles) => articles && setResponse(articles))
      .then(() => setLoading(false))
      .catch((message: string) => setError(message));
  }, [query, page]);

  return {
    query,
    page,
    response,
    loading,
    error,
    setPage,
    setQuery,
  };
};

export default useArticles;
