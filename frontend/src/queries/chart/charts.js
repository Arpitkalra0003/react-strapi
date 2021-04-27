import gql from "graphql-tag";

const CHARTS_QUERY = gql`
  query Chart {
    charts {
      name
      value
    }
  }
`;

export default CHARTS_QUERY;
