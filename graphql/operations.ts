import * as Types from './types';

import gql from 'graphql-tag';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type AllFilmsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type AllFilmsQuery = { __typename?: 'Root', allFilms?: { __typename?: 'FilmsConnection', films?: Array<{ __typename?: 'Film', id: string, releaseDate?: string | null, title?: string | null } | null> | null } | null };


export const AllFilmsDocument = gql`
    query AllFilms {
  allFilms {
    films {
      id
      releaseDate
      title
    }
  }
}
    `;