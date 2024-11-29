import React from "react";
import { DollarSign, Calendar } from "lucide-react";

const purchases = [
  {
    id: 1,
    course: "Web Development Bundle",
    date: "2024-03-10",
    amount: "$999",
    licenses: 50,
  },
  {
    id: 2,
    course: "Data Science Track",
    date: "2024-03-05",
    amount: "$1,499",
    licenses: 75,
  },
];

export default function PurchaseHistory() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Recent Purchases</h2>
        <DollarSign className="h-6 w-6 text-indigo-600" />
      </div>

      <div className="space-y-4">
        {purchases.map((purchase) => (
          <div
            key={purchase.id}
            className="p-4 border border-gray-200 rounded-lg"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-900">{purchase.course}</h3>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{purchase.date}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">{purchase.amount}</p>
                <p className="text-sm text-gray-600">
                  {purchase.licenses} licenses
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 text-center text-indigo-600 hover:text-indigo-700 font-medium">
        View All Purchases
      </button>
    </div>
  );
}
