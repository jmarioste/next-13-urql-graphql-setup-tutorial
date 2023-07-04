import * as Types from "./types";

import * as Operations from "./operations";
import * as Urql from "urql";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export function useAllFilmsQuery(
  options?: Omit<Urql.UseQueryArgs<Operations.AllFilmsQueryVariables>, "query">
) {
  return Urql.useQuery<
    Operations.AllFilmsQuery,
    Operations.AllFilmsQueryVariables
  >({ query: Operations.AllFilmsDocument, ...options });
}
