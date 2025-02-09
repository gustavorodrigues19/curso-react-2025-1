export default function Saudacao(props) {
  return props.estaLogado ? (
    <h1>Olá {props.nome}</h1>
  ) : (
    <h1>Por favor, faça login!</h1>
  );
}
