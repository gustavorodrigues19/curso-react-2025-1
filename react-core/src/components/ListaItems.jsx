export default function ListaItems(props) {
  return (
    <>
      <h3>Lista de items</h3>
      <ul>
        {props.items.map((item, key) => (
          <li key={`fruta-item-${key}`}>{item}</li>
        ))}
      </ul>
    </>
  );
}
