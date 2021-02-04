import { Dispatch, SetStateAction } from 'react';

export interface Response {
  totalArticles: number;
  pageSize: number;
  currentPage: number;
  pages: number;
  results: Article[];
}

export interface Article {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  fields: Fields;
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
}

export interface Fields {
  thumbnail: string;
}

export interface UseArticleHook {
  query: string;
  page: number;
  response: Response | undefined;
  loading: boolean;
  setPage: Dispatch<SetStateAction<number>>;
  setQuery: Dispatch<SetStateAction<string>>;
}
