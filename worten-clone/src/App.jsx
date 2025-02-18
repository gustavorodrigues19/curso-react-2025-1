function App() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-red-500 text-2xl font-bold mb-4 mt-6">Worten</h1>
      <div className="min-w-xs">
        <h3 className="text-red-500 font-bold text-md border-b border-slate-400 pb-2">
          Iniciar Sessão
        </h3>
        <form className="flex flex-col gap-2 mt-2">
          <input
            className="border border-slate-400 px-2 py-1 rounded-sm"
            type="text"
            name="email"
            placeholder="Email"
          />
          <input
            className="border border-slate-400 px-2 py-1 rounded-sm"
            type="text"
            name="password"
            placeholder="Palavra-Passe"
          />
          <button className="bg-red-500 rounded-xl text-white py-1 uppercase text-sm cursor-pointer hover:bg-slate-400">
            Iniciar sessão
          </button>
        </form>
      </div>
    </main>
  );
}

export default App;
