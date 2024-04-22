import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../../features/tasks/taskSlice";

const TodoList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  console.log("List of tasks", tasks);

  const deleteTask = (id) => {
    console.log(id);
    dispatch(removeTask(id));
  };

  return (
    <>
      <h5>List of Tasks</h5>
      <table>
        <thead>
          <tr>
            <th style={{ border: "1px solid black" }}>Sr.No</th>
            <th style={{ border: "1px solid black" }}>Name</th>
            <th style={{ border: "1px solid black" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => {
            return (
              <tr key={index}>
                <td style={{ border: "1px solid black" }}>{index + 1}</td>
                <td style={{ border: "1px solid black" }}>{task}</td>
                <td style={{ border: "1px solid black" }}>
                  <button
                    onClick={() => {
                      dispatch(removeTask(index));
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TodoList;
