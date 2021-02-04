import React, { useState } from 'react';
import Search from '../components/search/Search';
// eslint-disable-next-line import/no-named-as-default
import getArticles from '../services/guardianApi';

export default function NewsSearch(): JSX.Element {
  const [query, setQuery] = useState('Sports');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  setPage(1);
  const handleChange = (e: {
    preventDefault: () => void;
    target: { value: React.SetStateAction<string> };
  }) => {
    e.preventDefault();

    // setLoading(true);
    setQuery(e.target.value);
    console.log(query);
  };

  const handleSearch = () => {
    setLoading(true);
    getArticles(query, page).then(console.log);
  };

  if (loading) return <h1>Loading...</h1>;
  return (
    <Search
      query={query}
      handleChange={handleChange}
      handleSubmit={handleSearch}
    />
  );
}
