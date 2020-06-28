import gql from "graphql-tag";

export const SEARCH_DATA_FRAGMENT = gql`
  fragment SearchData on Businesses {
    business {
      name
      phone
      id
      price
      coordinates {
        latitude
        longitude
      }
      location {
        address1
        city
        postal_code
        country
      }
      rating
      review_count
      url
      photos
      reviews {
        rating
        time_created
        url
        user {
          name
          image_url
        }
        text
      }
    }
  }
`;

export const SEARCH_TOTAL_FRAGMENT = gql`
  fragment SearchTotal on Businesses {
    total
  }
`;
