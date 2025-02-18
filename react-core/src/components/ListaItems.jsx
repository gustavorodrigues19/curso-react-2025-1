export default function ListaItems({ items }) {
  return (
    <>
      <h3>Lista de items</h3>
      <ul>
        {items.map((item, key) => (
          <li key={`fruta-item-${key}`}>{item}</li>
        ))}
      </ul>
    </>
  );
}
