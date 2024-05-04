import TodoContainer from "../components/todo/todo-container";
import Container from "../components/ui/container";

const Todo = () => {
  return (
    <Container>
      <div className="pt-10 ">
        <div className="mx-auto overflow-hidden bg-white shadow-md rounded-xl ">
          <div className="p-8">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-semibold tracking-wide text-indigo-500 uppercase">
                Task Manager
              </div>
            </div>
            <TodoContainer />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Todo;
