import { useState } from "react";
import "./Formulario.css";

export default function Formulario() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const validate = (nameValue, emailValue) => {
    if (nameValue.length < 3 || emailValue.length < 3) {
      return false;
    }

    return true;
  };

  return (
    <div className="formularioWrapper">
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          const isValid = validate(name, email);
          if (!isValid) {
            alert("Dados inválidos");
            return;
          }
          console.log("submeteu", name, email);
        }}
      >
        <div className="formularioField">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="formularioField">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <button className="formularioSubmit">Enviar</button>
      </form>
    </div>
  );
}
