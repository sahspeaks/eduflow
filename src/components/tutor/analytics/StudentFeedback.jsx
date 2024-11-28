import React from "react";
import { MessageCircle, Star, ThumbsUp } from "lucide-react";

const feedbackData = {
  overall: {
    rating: 4.8,
    total: 1234,
    distribution: [
      { stars: 5, percentage: 75 },
      { stars: 4, percentage: 15 },
      { stars: 3, percentage: 7 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 1 },
    ],
  },
  recent: [
    {
      id: 1,
      student: "Alice Johnson",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=50",
      rating: 5,
      comment:
        "Excellent course! The content is well-structured and easy to follow.",
      course: "Advanced JavaScript",
      helpful: 12,
    },
    {
      id: 2,
      student: "Bob Smith",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=50",
      rating: 4,
      comment: "Great course overall. Would love more practical examples.",
      course: "React Masterclass",
      helpful: 8,
    },
  ],
};

export default function StudentFeedback() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Student Feedback</h2>
        <MessageCircle className="h-6 w-6 text-indigo-600" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Overall Rating */}
        <div>
          <div className="text-center mb-6">
            <p className="text-4xl font-bold text-gray-900">
              {feedbackData.overall.rating}
            </p>
            <div className="flex items-center justify-center my-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(feedbackData.overall.rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-gray-600">
              Based on {feedbackData.overall.total} reviews
            </p>
          </div>

          {/* Rating Distribution */}
          <div className="space-y-3">
            {feedbackData.overall.distribution.map((item) => (
              <div key={item.stars} className="flex items-center">
                <div className="flex items-center w-20">
                  <span className="text-sm text-gray-600">{item.stars}</span>
                  <Star className="h-4 w-4 text-yellow-400 fill-current ml-1" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
                <span className="text-sm text-gray-600 w-12">
                  {item.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Reviews */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Reviews
          </h3>
          <div className="space-y-4">
            {feedbackData.recent.map((review) => (
              <div key={review.id} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center mb-2">
                  <img
                    src={review.avatar}
                    alt={review.student}
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium text-gray-900">
                      {review.student}
                    </p>
                    <p className="text-sm text-gray-600">{review.course}</p>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-2">{review.comment}</p>
                <div className="flex items-center text-gray-500">
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  <span className="text-sm">
                    {review.helpful} found this helpful
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
