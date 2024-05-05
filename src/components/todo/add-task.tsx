import { ChangeEvent, FormEvent, useState } from "react";
import { addTodo, useTodos } from "../../redux/features/todoSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export interface IFormData {
  title: string;
  priority: string;
}

const AddTask = () => {
  const dispatch = useAppDispatch();
  const { todos } = useAppSelector(useTodos);

  const [formData, setFormData] = useState<IFormData>({
    title: "",
    priority: "",
  });

  const handleStateChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddTask = (e: FormEvent) => {
    e.preventDefault();
    const same = todos.find((todo) => todo.title === formData.title);
    if (same) {
      alert("already same name exist");
      return;
    }
    dispatch(addTodo(formData));
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
          defaultValue={""}
          className="p-2 mr-2 border"
        >
          <option disabled value="">
            Select a value
          </option>
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
