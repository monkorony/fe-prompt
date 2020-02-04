import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import Button from "@material-ui/core/Button";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Filter from "./Filter";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 }
];

export default function DotChart() {
  return (
    <div className="chartWrap">
      <div className="titleWrap">
        <div>
          <p className="titleLabel">Revenue</p>
          <p className="descLabel">Monthly Stats</p>
        </div>
        <div className="dateWrap rangeWrap">
          <Filter />
        </div>
      </div>
      <div className="chartContainer dotChart">
        <ResponsiveContainer>
          <LineChart
            width={600}
            height={100}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#00a8f9"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="statsChart">
          <div>
            <p className="descLabel">Revenue:</p>
            <p className="numLabel">$13.274</p>
          </div>
          <div>
            <p className="descLabel">Tax:</p>
            <p className="numLabel">$19.962</p>
          </div>
          <div>
            <p className="descLabel">Shipment:</p>
            <p className="numLabel">$1.976</p>
          </div>
          <div>
            <p className="descLabel">Orders:</p>
            <p className="numLabel">529,479</p>
          </div>
        </div>
      </div>
    </div>
  );
}
