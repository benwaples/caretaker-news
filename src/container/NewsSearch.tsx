import React, { useEffect, useState } from 'react';
import Search from '../components/search/Search';
// eslint-disable-next-line import/no-named-as-default
import getArticles from '../services/guardianApi';
import { Results } from '../types';

export default function NewsSearch(): JSX.Element {
  const [query, setQuery] = useState('Sports');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<Results>();

  const handleQuery = (e: {
    preventDefault: () => void;
    target: { value: React.SetStateAction<string> };
  }) => {
    setQuery(e.target.value);
    setPage(1);
  };

  useEffect(() => {
    setLoading(true);
    getArticles(query, page)
      .then((articles) => articles && setResponse(articles))
      .then(() => setLoading(false));
  }, [query, page]);
  console.log(response);

  if (loading) return <h1>Loading...</h1>;
  return <Search query={query} handleQuery={handleQuery} />;
}
