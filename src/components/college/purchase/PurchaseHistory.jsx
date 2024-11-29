import React from "react";
import { DollarSign, Calendar, Download } from "lucide-react";

const purchases = [
  {
    id: 1,
    courses: ["Advanced JavaScript Bundle", "Data Science Track"],
    date: "2024-03-10",
    amount: "$24,975",
    licenses: 50,
    status: "completed",
  },
  {
    id: 2,
    courses: ["Web Development Track"],
    date: "2024-03-05",
    amount: "$14,990",
    licenses: 30,
    status: "processing",
  },
];

export default function PurchaseHistory() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-900">Purchase History</h2>
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
                <div className="space-y-1">
                  {purchase.courses.map((course, index) => (
                    <p key={index} className="font-medium text-gray-900">
                      {course}
                    </p>
                  ))}
                </div>
                <div className="flex items-center text-sm text-gray-600 mt-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{purchase.date}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">{purchase.amount}</p>
                <p className="text-sm text-gray-600">
                  {purchase.licenses} licenses
                </p>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    purchase.status === "completed"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {purchase.status}
                </span>
              </div>
            </div>
            <button className="mt-4 flex items-center text-sm text-indigo-600 hover:text-indigo-700">
              <Download className="h-4 w-4 mr-1" />
              Download Invoice
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
