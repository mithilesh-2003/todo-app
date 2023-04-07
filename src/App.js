import { useState } from "react";
import { FaTrash } from "react-icons/fa";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleTask = (event) => {
    event.preventDefault();
    // adding new data with exsiting data
    setTasks((prevStat) => [{ task, isCompleted: false }, ...prevStat]);
    event.target.reset();
  };

  const taskCompleted = (index) => {
    [...tasks][index].isCompleted = true;
    setTask(tasks);
    console.log(tasks);
  };

  return (
    <>
      <div className="text-5xl text-center">ToDo App</div>
      <div className="flex justify-center py-10">
        <div>
          <form onSubmit={handleTask}>
            <input
              type="text"
              required
              placeholder="Your Task..."
              className="w-72 bg-gray-200 border border-gray-800 rounded-lg pl-3 py-2"
              onChange={(e) => setTask(e.target.value)}
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 ml-4 rounded-sm"
            >
              Add
            </button>
          </form>
          <div className="py-10">
            {tasks.length > 0 &&
              tasks.map((t, index) => {
                return (
                  <div
                    key={index}
                    className={`${
                      t.isCompleted
                        ? "bg-green-500 flex justify-between border border-emerald-600 my-4 px-4 py-3 rounded-sm"
                        : "flex justify-between border border-emerald-600 my-4 px-4 py-3 rounded-sm"
                    }`}
                  >
                    <p> {t.task}</p>
                    <div className="flex gap-3">
                      <button>
                        <FaTrash />
                      </button>
                      <button
                        className="bg-green-600 text-white text-xs px-3 py-1.3 rounded-sm"
                        onClick={() => taskCompleted(index)}
                      >
                        Done
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;