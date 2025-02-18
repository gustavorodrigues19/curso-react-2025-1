import { Link } from "react-router";

function App() {
  const items = [
    { to: "/bem-vindo", name: "Bem vindo" },
    { to: "/contador", name: "Contador" },
    { to: "/listar-items", name: "Listar items" },
    { to: "/listar-posts", name: "Listar posts" },
    { to: "/relogio", name: "Relogio" },
    { to: "/relogio-funcional", name: "Relogio Funcional" },
    { to: "/saudacao", name: "Saudacao" },
  ];

  return (
    <div>
      <ul>
        {items.map((item, key) => (
          <li key={`link-item-${key}`}>
            <Link to={item.to}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
