import gql from "graphql-tag";

export const SEARCH_PLACES = gql`
  query SearchPlaces($term: String, $location: String) {
    search(term: $term, location: $location) {
      total
    }
  }
`;
