import { Link } from "react-router";

function App() {
  const items = [{ to: "", name: "" }];
  return (
    <div>
      <ul>
        <li>
          <Link to="/bem-vindo">Bem vindo</Link>
        </li>
        <li>Contador</li>
        <li>Listar items</li>
        <li>Listar posts</li>
        <li>Relogio</li>
        <li>Relogio Funcional</li>
        <li>Saudacao</li>
      </ul>
    </div>
  );
}

export default App;
