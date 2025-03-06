import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <p>&copy; 2023 - Todos os direitos reservados</p>
      <p>Entre em contato pelo e-mail: contato@exemplo.com</p>
      <nav>
        <ul>
          <li>
            <a href="#">Termos de uso</a>
          </li>
          <li>
            <a href="#">Política de privacidade</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
