import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import BemVindoPage from "./pages/BemVindo";
import ContadorPage from "./pages/Contador";
import ListaItemsPage from "./pages/ListaItems";
import ListarPostsPage from "./pages/ListarPosts/index.jsx";
import RelogioPage from "./pages/Relogio/index.jsx";
import RelogioFuncionalPage from "./pages/RelogioFuncional/index.jsx";
import SaudacaoPage from "./pages/Saudacao/index.jsx";
import Layout from "./components/Layout/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/bem-vindo" element={<BemVindoPage />} />
          <Route path="/contador" element={<ContadorPage />} />
          <Route path="/listar-items" element={<ListaItemsPage />} />
          <Route path="/listar-posts" element={<ListarPostsPage />} />
          <Route path="/relogio" element={<RelogioPage />} />
          <Route path="/relogio-funcional" element={<RelogioFuncionalPage />} />
          <Route path="/saudacao" element={<SaudacaoPage />} />
          <Route path="*" element={<h1>404 Not found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
