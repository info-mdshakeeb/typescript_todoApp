import { ITodos } from "../../redux/features/todoSlice";

type TProps = {
  data: ITodos;
};

const TodoTaskCard = ({ data }: TProps) => {
  return (
    <div
      className={`border rounded-md p-2 mt-2 flex items-center justify-between w-full bg-white `}
    >
      <div className="flex gap-2">
        <input type="checkbox" />
        <p className={``}>{data.title}</p>
      </div>
      <p>{data.created_at}</p>
      <p>complete time</p>

      <div className=""> {data.priority}</div>
      <div className="space-x-2">
        <button className="px-2 text-white bg-blue-500 rounded">Edit</button>
        <button className="px-2 text-white bg-red-500 rounded">Delete</button>
      </div>
    </div>
  );
};

export default TodoTaskCard;
