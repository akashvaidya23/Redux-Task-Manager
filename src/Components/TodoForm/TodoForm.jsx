import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../features/tasks/taskSlice";

const TodoForm = () => {
  const [task, setTask] = useState("");
  const [disable, setDisable] = useState(true);

  const taskChangeHandler = (e) => {
    const task = e.target.value;
    setTask(task);
    if (task.length > 0) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  const dispatch = useDispatch();

  const saveTask = () => {
    // alert(task);
    setTask("");
    setDisable(true);
    dispatch(addTask(task));
  };

  return (
    <>
      <input
        onChange={taskChangeHandler}
        type="text"
        className="task"
        id="task"
        value={task}
      />
      <button disabled={disable} onClick={saveTask}>
        Save
      </button>
    </>
  );
};

export default TodoForm;
