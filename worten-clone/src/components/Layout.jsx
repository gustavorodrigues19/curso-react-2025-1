import { Outlet } from "react-router";
import { useNavigate } from "react-router";

export default function Layout({ cart }) {
  const cartCount = cart?.length ?? 0;
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-red-500 text-white p-4 flex justify-between items-center">
        <h1
          className="text-2xl font-bold"
          onClick={() => navigate("/products")}
        >
          Worten Clone
        </h1>
        <div className="relative">
          <span className="text-lg" onClick={() => navigate("/cart")}>
            🛒
          </span>
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {cartCount}
          </span>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-6">
        <p>&copy; 2025 Worten Clone - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
