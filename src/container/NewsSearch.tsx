import React, { useEffect, useState } from 'react';
import ArticleList from '../components/articles/ArticleList';
import PageNav from '../components/page/PageNav';
import Search from '../components/search/Search';
// eslint-disable-next-line import/no-named-as-default
import getArticles from '../services/guardianApi';
import { Response } from '../types';

export default function NewsSearch(): JSX.Element {
  const [query, setQuery] = useState('Sports');
  const [page, setPage] = useState(1);
  const [response, setResponse] = useState<Response>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  const handleQuery = (e: {
    preventDefault: () => void;
    target: { value: React.SetStateAction<string> };
  }) => {
    setPage(1);
    setQuery(e.target.value);
  };

  useEffect(() => {
    setLoading(true);
    getArticles(query, page)
      .then((articles) => articles && setResponse(articles))
      .then(() => setLoading(false))
      .catch((message: string) => setError(message));
  }, [query, page]);
  console.log(response);
  // display current page number

  return (
    <>
      <Search query={query} handleQuery={handleQuery} />
      <PageNav setPage={setPage} page={page} totalPages={response?.pages} />
      {response && !loading && <ArticleList articles={response?.results} />}
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
    </>
  );
}
