import { useAuthContext } from "./context/AuthContext";
import LoginForm from "./components/LoginForm";

function App() {
  const { user, handleUser } = useAuthContext();

  return (
    <main className="h-screen flex flex-col items-center justify-center ">
      <h1 className="text-red-500 text-2xl font-bold mb-4">Worten</h1>
      <div className="min-w-xs">
        <h3 className="text-red-500 font-bold text-md border-b border-slate-400 pb-2">
          Iniciar Sessão
        </h3>
        {JSON.stringify(user)}
        <LoginForm handleUser={handleUser} />
      </div>
    </main>
  );
}

export default App;
