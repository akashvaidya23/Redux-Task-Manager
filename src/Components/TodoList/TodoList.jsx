import { useDispatch, useSelector } from "react-redux";
import { removeTask, toggleCart } from "../../features/tasks/taskSlice";
import { useEffect } from "react";

const TodoList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  console.log("List of tasks", tasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
                <td style={{ border: "1px solid black" }}>{task.name}</td>
                <td style={{ border: "1px solid black" }}>
                  <button
                    onClick={() => {
                      dispatch(removeTask(index));
                    }}
                  >
                    Delete
                  </button>
                  {"    "}
                  {!task.added_to_cart ? (
                    <button
                      onClick={() => {
                        dispatch(toggleCart(index));
                      }}
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        dispatch(toggleCart(index));
                      }}
                    >
                      Remove from Cart
                    </button>
                  )}
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
