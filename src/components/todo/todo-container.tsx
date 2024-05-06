import { reset, useTodos } from "../../redux/features/todoSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import AddTask from "./add-task";
import TodoTaskCard from "./todo-taskcard";

const TodoContainer = () => {
  const { todos } = useAppSelector(useTodos);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="items-center justify-between mb-4 md:flex">
        <AddTask />
        <div className="items-center justify-center gap-3 md:flex">
          <div className="space-x-2">
            <label className="">Filter :</label>
            <select className="p-2 border">
              <option value="all">All</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <button
            onClick={() => dispatch(reset())}
            className="p-2 text-sm text-white bg-red-500 rounded "
          >
            Delete All
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full px-3 pt-1 pb-2 bg-gray-100 rounded-md ">
        {todos?.map((todo) => (
          <TodoTaskCard key={todo.id} data={todo} />
        ))}
        {/* <p className="py-5 font-semibold capitalize">currently no task</p> */}
      </div>
    </>
  );
};

export default TodoContainer;
