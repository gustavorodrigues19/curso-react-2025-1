import { useState } from "react";
import { useNavigate } from "react-router";

export default function LoginForm({ handleUser }) {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInput = (e, name) => {
    setFormValues({
      ...formValues,
      [name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formValues.email === "gustavo@gmail.com" &&
      formValues.password === "12345"
    ) {
      handleUser({
        id: 1,
        name: "Gustavo",
        email: formValues.email,
      });
      navigate("/dashboard");
      return;
    }
    alert("E-mail ou senha incorretos");
  };

  return (
    <form className="flex flex-col gap-2 mt-2" onSubmit={handleSubmit}>
      <input
        className="border border-slate-400 px-2 py-1 rounded-sm"
        type="text"
        name="email"
        placeholder="Email"
        value={formValues.email}
        onChange={(e) => handleInput(e, "email")}
      />
      <input
        className="border border-slate-400 px-2 py-1 rounded-sm"
        type="password"
        name="password"
        placeholder="Palavra-Passe"
        value={formValues.password}
        onChange={(e) => handleInput(e, "password")}
      />
      <button className="bg-red-500 rounded-xl text-white py-1 uppercase text-sm cursor-pointer hover:bg-slate-400">
        Iniciar sessão
      </button>
    </form>
  );
}
