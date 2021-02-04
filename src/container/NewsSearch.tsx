/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ArticleList from '../components/articles/ArticleList';
import PageNav from '../components/page/PageNav';
import Search from '../components/search/Search';
import useArticles from '../hooks';
import './newsSearch.scss';

export default function NewsSearch(): JSX.Element {
  const { query, page, response, loading, setPage, setQuery } = useArticles();

  const handleQuery = (e: {
    preventDefault: () => void;
    target: { value: React.SetStateAction<string> };
  }) => {
    setPage(1);
    setQuery(e.target.value);
  };

  const searchProps = { query, handleQuery };
  const pageNavProps = { setPage, page, totalPages: response?.pages };

  return (
    <main>
      <section id="search">
        <Search {...searchProps} />
        <PageNav {...pageNavProps} />
      </section>
      {response && !loading && <ArticleList articles={response?.results} />}
      {loading && <h1>Loading...</h1>}
    </main>
  );
}
