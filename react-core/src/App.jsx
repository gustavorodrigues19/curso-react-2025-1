import { useState } from "react";
function ListaTarefas() {
  const [task, setTask] = useState("");
  const [taskList] = useState(["item 1"]);

  return (
    <div>
      <h1>Lista de tarefas</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("entrou aqui", task);
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
            {item} <button>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>State</h1>
      <ListaTarefas />
    </div>
  );
}

export default App;
