import React from "react";
import { DollarSign, TrendingUp, CreditCard } from "lucide-react";

const revenue = {
  total: "$12,345",
  trend: "+20%",
  lastMonth: "$9,876",
  transactions: [
    {
      id: 1,
      course: "Advanced JavaScript",
      amount: "$99",
      date: "2024-03-10",
      status: "completed",
    },
    {
      id: 2,
      course: "React Masterclass",
      amount: "$129",
      date: "2024-03-09",
      status: "completed",
    },
    {
      id: 3,
      course: "Python Basics",
      amount: "$79",
      date: "2024-03-08",
      status: "completed",
    },
  ],
};

export default function RevenueOverview() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Revenue Overview</h2>
        <DollarSign className="h-6 w-6 text-indigo-600" />
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Total Revenue</p>
            <p className="text-2xl font-semibold text-gray-900">
              {revenue.total}
            </p>
          </div>
          <div className="flex items-center text-green-600">
            <TrendingUp className="h-5 w-5 mr-1" />
            <span>{revenue.trend}</span>
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-600 mb-4">Recent Transactions</p>
          <div className="space-y-3">
            {revenue.transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {transaction.course}
                  </p>
                  <p className="text-xs text-gray-600">{transaction.date}</p>
                </div>
                <div className="flex items-center">
                  <CreditCard className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="font-medium">{transaction.amount}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
