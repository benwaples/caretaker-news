import React, { useEffect, useState } from 'react';
import Search from '../components/search/Search';
// eslint-disable-next-line import/no-named-as-default
import getArticles from '../services/guardianApi';

export default function NewsSearch(): JSX.Element {
  const [query, setQuery] = useState('Sports');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

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
      .then(console.log)
      .then(() => setLoading(false));
  }, [query, page]);

  if (loading) return <h1>Loading...</h1>;
  return <Search query={query} handleQuery={handleQuery} />;
}
