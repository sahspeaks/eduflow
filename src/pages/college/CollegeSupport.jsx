import React, { useState } from "react";
import { MessageCircle, Mail, Phone } from "lucide-react";

const CollegeSupport = () => {
  const [message, setMessage] = useState("");
  const [contactMethod, setContactMethod] = useState("email");

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send the support request
    alert(`Support request submitted via ${contactMethod}: ${message}`);
    setMessage("");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Support Center</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Contact Methods */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Contact Methods</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="h-6 w-6 text-indigo-600 mr-3" />
              <span>support@college.edu</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-6 w-6 text-green-600 mr-3" />
              <span>1-800-COLLEGE</span>
            </div>
          </div>
        </div>

        {/* Support Request Form */}
        <div className="md:col-span-2 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">
            Submit a Support Request
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Contact Method
              </label>
              <div className="flex space-x-4">
                {["email", "phone", "chat"].map((method) => (
                  <label key={method} className="inline-flex items-center">
                    <input
                      type="radio"
                      name="contactMethod"
                      value={method}
                      checked={contactMethod === method}
                      onChange={() => setContactMethod(method)}
                      className="form-radio"
                    />
                    <span className="ml-2 capitalize">{method}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Describe your issue or question"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Submit Support Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CollegeSupport;
