import { useState } from "react";

const NoteForm = () => {
  {
    {
      /*  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");
  const [category, setCategory] = useState("personal");
  const [description, setDescription] = useState("");
*/
    }
  }

  const [formData, setFormData] = useState({
    title: "",
    category: "work",
    description: "",
    priority: "medium",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: [e.target.value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) return;
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="mb-4">
        <label htmlFor="title" className="block font-semibold">
          Title
        </label>
        <input
          name="title"
          type="text"
          className="w-full p-2 rounded-lg border"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="priority" className="block font-semibold">
          Priority
        </label>
        <select
          name="priority"
          type="text"
          className="w-full p-2 rounded-lg border"
          value={formData.priority}
          onChange={handleChange}
        >
          <option value="high">🔴 High</option>
          <option value="medium">🔵 Medium</option>
          <option value="low">🟡 Low </option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="block font-semibold">
          Category
        </label>
        <select
          name="category"
          type="text"
          className="w-full p-2 rounded-lg border"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="work">Work</option>
          <option value="personal">Personal</option>
          <option value="ideas">Ideas </option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="title" className="block font-semibold">
          Description
        </label>
        <textarea
          name="description"
          className="w-full p-2 rounded-lg border"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <button className="w-full p-2 text-white bg-purple-500 rounded-lg cursor-pointer hover:bg-purple-600">
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;
