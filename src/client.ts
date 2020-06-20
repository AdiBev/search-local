import ApolloClient from "apollo-boost";

const apiToken = "FAKE_TOKEN";

export const client = new ApolloClient({
  uri: "https://api.yelp.com/v3/graphql",
  headers: {
    Authorization: `Bearer ${apiToken}`,
  },
});
