import { Outlet, useNavigate, useLocation } from "react-router";

export default function Layout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const showButton = pathname !== "/";

  return (
    <>
      <header>
        <h1>Logo</h1>
      </header>
      <Outlet />
      {showButton && <button onClick={() => navigate("/")}>Voltar</button>}
      <footer>
        <h3>My footer</h3>
      </footer>
    </>
  );
}
