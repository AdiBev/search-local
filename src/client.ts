import ApolloClient from "apollo-boost";

const apiToken =
  "rwHmIJ9ipaXySeJ_FpnX9dNMRev40UvFDiGCbq951Vl2lY1Me4ZJU5nWD5peGUxADYzpI0OEes12ZJkWS4hngZhutf45XSXXk2HxF6bwQ9KeUOFKmOCrUapyF4vbXnYx";

export const client = new ApolloClient({
  uri: "https://api.yelp.com/v3/graphql",
  headers: {
    Authorization: `Bearer ${apiToken}`,
  },
});
