import ListaItems from "../../components/ListaItems";

export default function ListaItemsPage() {
  const lista = ["item 1", "item 2"];
  return (
    <div>
      <h1>Componente ListaItems.jsx</h1>
      <ListaItems items={lista} />
      {ListaItems({ items: lista })}
    </div>
  );
}
