import { ChangeEvent, FormEvent, useState } from "react";

export interface IFormData {
  title: string;
  priority: string;
}

const AddTask = () => {
  const [formData, setFormData] = useState<IFormData>({
    title: "",
    priority: "",
  });

  const handleStateChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const inputName = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [inputName]: value,
    });
  };

  const handleAddTask = (e: FormEvent) => {
    e.preventDefault();
    // Handle the form submission here
  };

  return (
    <form onSubmit={handleAddTask}>
      <div className="">
        <input
          name="title"
          required
          onChange={handleStateChange}
          type="text"
          className="p-2 mr-2 border"
          placeholder="Enter task..."
        />
        <select
          onChange={handleStateChange}
          name="priority"
          required
          className="p-2 mr-2 border"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button className="p-2 mt-4 text-white bg-blue-500 rounded">
          Add Task
        </button>
      </div>
    </form>
  );
};

export default AddTask;
