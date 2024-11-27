import React, { useState } from "react";
import { Save, Plus } from "lucide-react";

export default function NotesSection() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Async Patterns",
      content: "Important patterns to remember...",
    },
    {
      id: 2,
      title: "Error Handling",
      content: "Best practices for handling errors...",
    },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">My Notes</h2>
        <button className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700">
          <Plus className="h-5 w-5" />
          <span>Add Note</span>
        </button>
      </div>

      <div className="space-y-4">
        {notes.map((note) => (
          <div key={note.id} className="p-4 border border-gray-200 rounded-lg">
            <input
              type="text"
              value={note.title}
              className="font-semibold text-gray-900 mb-2 w-full"
            />
            <textarea
              value={note.content}
              rows={4}
              className="w-full text-gray-600 resize-none"
            />
            <div className="flex justify-end mt-2">
              <button className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700">
                <Save className="h-4 w-4" />
                <span>Save</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
