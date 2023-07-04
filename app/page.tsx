import {
  AllFilmsDocument,
  AllFilmsQuery,
  AllFilmsQueryVariables,
} from "@/graphql/operations";
import { getUrqlClient } from "@/lib/urql";

async function getAllFilms() {
  const { client } = getUrqlClient();
  const result = await client.query<AllFilmsQuery, AllFilmsQueryVariables>(
    AllFilmsDocument,
    {}
  );
  return result;
}

export default async function Home() {
  const { data, error } = await getAllFilms();

  data?.allFilms;
  return (
    <div>
      {error && <p>{error.message}</p>}
      {data && <pre>{JSON.stringify(data, null, 4)}</pre>}
    </div>
  );
}
