import { useState } from "react";

const buttonStyles = {
  padding: "1rem",
  fontSize: "1rem",
  border: "none",
  borderRadius: "0.5rem",
  backgroundColor: "#58CEFF",
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer",
};

export default function Contador() {
  const [valor, setValor] = useState(0);

  return (
    <div>
      <h2>Contador</h2>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <button
          style={buttonStyles}
          onClick={() => {
            setValor(valor - 1);
          }}
        >
          -
        </button>
        <span style={{ fontSize: "1.5rem" }}>{valor}</span>
        <button
          style={buttonStyles}
          onClick={() => {
            setValor(valor + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
