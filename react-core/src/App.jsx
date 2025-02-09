import BemVindo from "./components/BemVindo";
import Saudacao from "./components/Saudacao";

function ListaItems(props) {
  return (
    <>
      <h3>Lista de items</h3>
      <ul>
        {props.items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <BemVindo />
      <Saudacao nome="Gustavo 1" />
      <ListaItems items={["maça", "pera"]} />
    </div>
  );
}

export default App;
