import React from "react";
import {
    AreaChart,
    Area,
    YAxis,
    XAxis,
    CartesianGrid
} from "recharts";

function Chart({ players }) {
    return (
        <div className="chart">
            <AreaChart width={600} height={250} data={players}>
                <Area type="monotone" dataKey="searches" stroke="#8884d8" />
            </AreaChart>
        </div>
    );
}

export default Chart;
