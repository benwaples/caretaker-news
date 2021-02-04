import React from 'react';
import ArticleList from '../components/articles/ArticleList';
import PageNav from '../components/page/PageNav';
import Search from '../components/search/Search';
import useArticles from '../hooks';
import './newsSearch.scss';

export default function NewsSearch(): JSX.Element {
  const {
    query,
    page,
    response,
    loading,
    error,
    setPage,
    setQuery,
  } = useArticles();

  const handleQuery = (e: {
    preventDefault: () => void;
    target: { value: React.SetStateAction<string> };
  }) => {
    setPage(1);
    setQuery(e.target.value);
  };

  console.log(response);

  return (
    <main>
      <section id="search">
        <Search query={query} handleQuery={handleQuery} />
        <PageNav setPage={setPage} page={page} totalPages={response?.pages} />
      </section>
      {response && !loading && <ArticleList articles={response?.results} />}
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
    </main>
  );
}
