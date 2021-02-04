import { Response } from '../types';

export function getArticles(search: string, page: number): Promise<Response> {
  return fetch(
    `https://content.guardianapis.com/search?show-fields=thumbnail&q=${search}&page=${page}&api-key=${process.env.REACT_APP_GUARDIAN_KEY}`
  )
    .then((res) => res.json())
    .then((json) => json.response)
    .catch(() => {
      throw new Error(`failed to fetch articles about ${search}`);
    });
}

export default getArticles;
