import HomePage from "./pages/index.jsx";
import DashboardPage from "./pages/dashboard";
import CartPage from "./pages/cart";
import ProductListPage from "./pages/products";
import { BrowserRouter, Routes, Route } from "react-router";
import AuthContextProvider from "./context/AuthContext.jsx";
import CartContextProvider from "./context/CartContext.jsx";
import Layout from "./pages/Layout.jsx";

function App() {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/products" element={<ProductListPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </AuthContextProvider>
  );
}

export default App;
