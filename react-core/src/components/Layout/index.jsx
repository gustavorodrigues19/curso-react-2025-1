import { Outlet, useNavigate, useLocation } from "react-router";

export default function Layout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const showButton = pathname !== "/";
  const handleClick = () => navigate("/");

  return (
    <>
      <header>
        <h1>Logo</h1>
      </header>
      <Outlet />
      {showButton && <button onClick={handleClick}>Voltar</button>}
      <footer>
        <h3>My footer</h3>
      </footer>
    </>
  );
}
