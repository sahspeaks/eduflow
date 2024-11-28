import React from "react";
import { DollarSign, TrendingUp, ArrowUpRight } from "lucide-react";

const revenueData = {
  total: "$12,345",
  trend: "+15%",
  monthly: [
    { month: "Jan", amount: 980 },
    { month: "Feb", amount: 1200 },
    { month: "Mar", amount: 1500 },
  ],
};

export default function RevenueMetrics({ courseId }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Revenue Metrics</h2>
        <DollarSign className="h-5 w-5 text-indigo-600" />
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Total Revenue</p>
            <p className="text-2xl font-bold text-gray-900">
              {revenueData.total}
            </p>
          </div>
          <div className="flex items-center text-green-600">
            <TrendingUp className="h-5 w-5 mr-1" />
            <span>{revenueData.trend}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-4">
          Monthly Revenue
        </h3>
        <div className="space-y-3">
          {revenueData.monthly.map((data) => (
            <div
              key={data.month}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <span className="text-sm text-gray-600">{data.month}</span>
              <div className="flex items-center">
                <span className="font-medium text-gray-900">
                  ${data.amount}
                </span>
                <ArrowUpRight className="h-4 w-4 text-green-500 ml-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
