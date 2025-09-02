import { useState } from "react";

const NoteForm = () => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");

  return (
    <form className="mb-6">
      <div className="mb-4">
        <label htmlFor="title" className="block font-semibold">
          Title
        </label>
        <input
          type="text"
          className="w-full p-2 rounded-lg border"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="title" className="block font-semibold">
          Priority
        </label>
        <select
          type="text"
          className="w-full p-2 rounded-lg border"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="high">🔴 High</option>
          <option value="medium">🔵 Medium</option>
          <option value="low">🟡 Low </option>
        </select>
      </div>
    </form>
  );
};

export default NoteForm;
