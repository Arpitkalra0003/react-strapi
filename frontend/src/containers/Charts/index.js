import React from "react";
import Charts from "../../components/Charts";
import Query from "../../components/Query";
import CHARTS_QUERY from "../../queries/chart/charts";

const Home = () => {
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>Charts</h1>
          <Query query={CHARTS_QUERY}>
            {({ data: { charts } }) => {
             
              return <Charts articles={charts} />;
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default Home;
