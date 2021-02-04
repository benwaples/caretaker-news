import { Response } from '../types';

export function getArticles(search: string, page: number): Promise<Response> {
  return fetch(
    `http://content.guardianapis.com/search?q=${search}&page=${page}&page-size=10&api-key=${process.env.REACT_APP_GUARDIAN_KEY}`
  )
    .then((res) => res.json())
    .then((json) => json.response);
}

export default getArticles;
