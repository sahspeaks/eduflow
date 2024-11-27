import React from "react";
import { Monitor, Users, GraduationCap, Headphones } from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Interactive Learning",
    description:
      "Engage with dynamic content, live sessions, and hands-on projects for an immersive learning experience.",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description:
      "Learn from industry professionals and subject matter experts with years of real-world experience.",
  },
  {
    icon: GraduationCap,
    title: "Certified Courses",
    description:
      "Earn recognized certificates upon completion to showcase your skills and achievements.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Get help whenever you need it with our round-the-clock student support system.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose EduFlow?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the future of education with our innovative learning
            platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
