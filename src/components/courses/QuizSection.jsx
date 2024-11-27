import React, { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";

const quiz = {
  title: "Async/Await Quiz",
  questions: [
    {
      id: 1,
      question: "What is the purpose of the async keyword?",
      options: [
        "To make a function run faster",
        "To indicate that a function returns a Promise",
        "To prevent function execution",
        "To create a new thread",
      ],
      correctAnswer: 1,
    },
    {
      id: 2,
      question: "Which statement must be used inside an async function?",
      options: ["wait", "await", "async", "promise"],
      correctAnswer: 1,
    },
  ],
};

export default function QuizSection() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">{quiz.title}</h2>
        {!submitted && (
          <button
            onClick={handleSubmit}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
          >
            Submit Quiz
          </button>
        )}
      </div>

      <div className="space-y-6">
        {quiz.questions.map((question) => (
          <div
            key={question.id}
            className="p-4 border border-gray-200 rounded-lg"
          >
            <div className="flex justify-between items-start">
              <h3 className="font-medium text-gray-900">{question.question}</h3>
              {submitted &&
                (answers[question.id] === question.correctAnswer ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-500" />
                ))}
            </div>

            <div className="mt-4 space-y-2">
              {question.options.map((option, index) => (
                <label
                  key={index}
                  className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${
                    submitted
                      ? index === question.correctAnswer
                        ? "bg-green-50"
                        : answers[question.id] === index
                        ? "bg-red-50"
                        : "bg-gray-50"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={index}
                    checked={answers[question.id] === index}
                    onChange={() =>
                      !submitted &&
                      setAnswers({ ...answers, [question.id]: index })
                    }
                    disabled={submitted}
                    className="text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="text-gray-900">{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      {submitted && (
        <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
          <h3 className="font-semibold text-indigo-900">Quiz Results</h3>
          <p className="text-indigo-700 mt-1">
            You got{" "}
            {
              Object.entries(answers).filter(
                ([id, answer]) =>
                  answer ===
                  quiz.questions.find((q) => q.id === parseInt(id))
                    ?.correctAnswer
              ).length
            }{" "}
            out of {quiz.questions.length} correct!
          </p>
        </div>
      )}
    </div>
  );
}
