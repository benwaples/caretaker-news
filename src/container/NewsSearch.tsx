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
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<Response>();

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

  // if (loading) return <h1>Loading...</h1>;
  return (
    <>
      <Search query={query} handleQuery={handleQuery} />
      <PageNav setPage={setPage} page={page} />
      {response && !loading ? (
        <ArticleList articles={response?.results} />
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}
