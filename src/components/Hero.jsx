import React from "react";
import { Rocket, Users, BookOpen, Trophy } from "lucide-react";
import HeroLogo from "../static/Hero.png";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-indigo-50 to-white  pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile: Stacked Layout */}
        <div className="block md:hidden">
          <div className="text-center">
            <img
              src={HeroLogo}
              alt="Learning Platform Illustration"
              className="w-full max-w-md mx-auto"
            />
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Learn Without Limits
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join millions of learners worldwide and transform your career with
              our cutting-edge online learning platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors">
                Get Started Free
              </button>
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-colors">
                Explore Courses
              </button>
            </div>
          </div>
        </div>

        {/* Desktop: Two-Column Layout */}
        <div className="hidden md:grid md:grid-cols-2 items-center gap-16">
          {/* Left Column: Text Content */}
          <div className="space-y-8">
            <h1 className="text-6xl font-bold text-gray-900">
              Learn Without Limits
            </h1>
            <p className="text-xl text-gray-600 pr-8">
              Join millions of learners worldwide and transform your career with
              our cutting-edge online learning platform.
            </p>
            <div className="flex gap-4">
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors">
                Get Started Free
              </button>
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-colors">
                Explore Courses
              </button>
            </div>
          </div>

          {/* Right Column: Illustration */}
          <div>
            <img
              src={HeroLogo}
              alt="Learning Platform Illustration"
              className="w-full rounded-lg "
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto md:mt-10 mt-16">
          <div className="flex flex-col items-center">
            <div className="bg-indigo-100 p-3 rounded-full mb-3">
              <Users className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="font-bold text-gray-900">10K+</h3>
            <p className="text-gray-600">Active Students</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-indigo-100 p-3 rounded-full mb-3">
              <BookOpen className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="font-bold text-gray-900">500+</h3>
            <p className="text-gray-600">Expert Courses</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-indigo-100 p-3 rounded-full mb-3">
              <Trophy className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="font-bold text-gray-900">95%</h3>
            <p className="text-gray-600">Success Rate</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-indigo-100 p-3 rounded-full mb-3">
              <Rocket className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="font-bold text-gray-900">24/7</h3>
            <p className="text-gray-600">Support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
