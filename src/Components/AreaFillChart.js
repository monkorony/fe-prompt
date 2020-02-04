import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import Button from "@material-ui/core/Button";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 }
];

export default function AreaFillChart() {
  return (
    <div className="chartWrap">
      <div className="titleWrap">
        <div>
          <p className="titleLabel">Site Visits</p>
          <p className="descLabel">Weekly Stats</p>
        </div>
        <div>
          <Button variant="contained" color="primary" className="grBtn">
            NEW
          </Button>
          <Button variant="contained" color="primary" className="outlineBtn">
            RETURNING
          </Button>
        </div>
      </div>
      <div className="chartContainer">
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4bb5e0" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#4bb5e0" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4bb5e0" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#4bb5e0" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#4bb5e0"
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
