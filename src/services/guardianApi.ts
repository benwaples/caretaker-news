import { Results } from '../types';

export function getArticles(search: string, page: number): Promise<Results> {
  return fetch(
    `http://content.guardianapis.com/search?q=${search}&page=${page}&page-size=10&api-key=${process.env.REACT_APP_GUARDIAN_API}`
  )
    .then((res) => res.json())
    .then((json) =>
      json.map({
        totalArticles: json.total,
        pageSize: json.pageSize,
        currentPage: json.currentPage,
        pages: json.pages,
        results: json.results,
      })
    );
}

export default getArticles;
