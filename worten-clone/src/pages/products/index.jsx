const products = [
  { id: 1, name: "Smartphone", price: 799 },
  { id: 2, name: "Laptop", price: 2499 },
  { id: 3, name: "Fones de Ouvido", price: 199 },
];

export default function ProductList() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Produtos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">R$ {product.price}</p>
            <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-400 transition cursor-pointer">
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
