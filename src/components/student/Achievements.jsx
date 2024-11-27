import React from "react";
import { Trophy, Star, Target, Zap } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Quick Learner",
    description: "Complete 5 lessons in one day",
    icon: Zap,
    earned: true,
  },
  {
    id: 2,
    title: "Perfect Score",
    description: "Get 100% on any quiz",
    icon: Star,
    earned: true,
  },
  {
    id: 3,
    title: "Study Streak",
    description: "Learn for 7 days in a row",
    icon: Target,
    earned: false,
  },
];

export default function Achievements() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Achievements</h2>
        <Trophy className="h-6 w-6 text-yellow-500" />
      </div>
      <div className="space-y-4">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`p-4 rounded-lg flex items-center space-x-4 ${
              achievement.earned ? "bg-indigo-50" : "bg-gray-50"
            }`}
          >
            <div
              className={`p-2 rounded-full ${
                achievement.earned ? "bg-indigo-100" : "bg-gray-200"
              }`}
            >
              <achievement.icon
                className={`h-5 w-5 ${
                  achievement.earned ? "text-indigo-600" : "text-gray-500"
                }`}
              />
            </div>
            <div>
              <h3
                className={`font-semibold ${
                  achievement.earned ? "text-gray-900" : "text-gray-500"
                }`}
              >
                {achievement.title}
              </h3>
              <p className="text-sm text-gray-600">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
