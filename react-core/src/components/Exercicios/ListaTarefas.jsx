import { useState } from "react";
export default function ListaTarefas() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  return (
    <div>
      <h1>Lista de tarefas</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // setTaskList((prevState) => [task, ...prevState]);
          setTaskList([task, ...taskList]);
          setTask("");
        }}
      >
        <input
          type="text"
          value={task}
          placeholder="Adicionar tarefa"
          onChange={(e) => setTask(e.target.value)}
        />
        <button>Adicionar</button>
      </form>
      <ul>
        {taskList.map((item, key) => (
          <li key={`todo-item-${key}`}>
            {item}{" "}
            <button
              onClick={() => {
                const filteredList = taskList.filter(
                  (_, keyTask) => key !== keyTask
                );
                setTaskList(filteredList);
              }}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
