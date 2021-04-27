import React from "react";
import { ResponsiveContainer, PieChart, Pie } from "recharts";

const Charts = ({ articles }) => {
  console.log(articles);
  return (
    <div>
      <div className="uk-child-width-1-2" data-uk-grid>
        <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart height={250}>
              <Pie
                data={articles}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({
                  cx,
                  cy,
                  midAngle,
                  innerRadius,
                  outerRadius,
                  value,
                  index,
                }) => {
                  console.log("handling label?");
                  const RADIAN = Math.PI / 180;
                  // eslint-disable-next-line
                  const radius = 25 + innerRadius + (outerRadius - innerRadius);
                  // eslint-disable-next-line
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  // eslint-disable-next-line
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);

                  return (
                    <text
                      x={x}
                      y={y}
                      fill="#8884d8"
                      textAnchor={x > cx ? "start" : "end"}
                      dominantBaseline="central"
                    >
                      {articles[index].name} ({value})
                    </text>
                  );
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Charts;
