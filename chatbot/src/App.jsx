import styled from "styled-components";
import { useApp } from "./useApp";

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: #4368bf;
  margin-bottom: 2rem;
`;

const SubTitle = styled.h2`
  font-size: 1.2rem;
  text-align: center;
  color: #4368bf;
`;

const Wrapper = styled.section`
  padding: 4rem;
`;

const Form = styled.form`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 300px;
`;

const FormInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
`;

const FormButton = styled.button`
  padding: 0.5rem;
  font-size: 1rem;
  background-color: #4368bf;
  color: white;
  border: none;
  cursor: pointer;
`;

function App() {
  const { formValues, setFormValues, user, messages, handleSubmit } = useApp();

  return (
    <Wrapper>
      <Title>Chatbot</Title>
      {!user ? (
        <Form onSubmit={handleSubmit}>
          <SubTitle>Login</SubTitle>
          <FormInput
            type="text"
            placeholder="E-mail"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                email: e.target.value,
              })
            }
          />
          <FormInput
            type="text"
            placeholder="Senha"
            onChange={(e) => {
              setFormValues({
                ...formValues,
                password: e.target.value,
              });
            }}
          />
          <FormButton type="submit">Enviar</FormButton>
        </Form>
      ) : (
        <div>
          <SubTitle>Bem vindo ao chat {user.email}</SubTitle>
          <div>
            {messages.map((message, key) => (
              <p key={`message-${message.id}-${key}`}>{message.text}</p>
            ))}
          </div>
        </div>
      )}
    </Wrapper>
  );
}

export default App;
