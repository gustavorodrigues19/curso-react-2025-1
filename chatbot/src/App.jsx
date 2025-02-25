import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

const initialState = [
  {
    id: 1,
    displayName: "Gustavo",
    text: "blablabla",
  },
];

function Auth({ setUser }) {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleInput = (evt, name) => {
    setFormValues({
      ...formValues,
      [name]: evt.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await signInWithEmailAndPassword(
        auth,
        formValues.email,
        formValues.password
      );

      setUser(response.user);
      setFormValues({
        email: "",
        password: "",
      });
    } catch {
      alert("Usuário ou senha invalidos");
    }
  };

  return (
    <div style={{ marginBottom: "5rem" }}>
      <h2>Faça login para acessar o chat</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formValues.email}
          onChange={(e) => handleInput(e, "email")}
          placeholder="Digite sua mensagem..."
        />
        <input
          type="text"
          value={formValues.password}
          onChange={(e) => handleInput(e, "password")}
          placeholder="Digite sua senha..."
        />
        <button type="submit">Entrar</button>
        {JSON.stringify(formValues)}
      </form>
    </div>
  );
}

function App() {
  const [messages, setMessages] = useState(initialState);
  const [newMessage, setNewMessage] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newMessage.trim() === "") return;

    await addDoc(collection(db, "messages"), {
      text: newMessage,
      createdAt: serverTimestamp(),
      uid: auth.currentUser.uid,
      displayName: auth.currentUser.displayName,
    });
    setNewMessage("");
  };
  return (
    <div className="chat-container">
      <Auth setUser={setUser} />

      {user ? (
        <>
          <div className="messages">
            {messages.map((msg) => (
              <div key={msg.id}>
                <strong>{msg.displayName}: </strong>
                {msg.text}
              </div>
            ))}
          </div>
          <form className="message-form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Digite sua mensagem..."
            />
            <button type="submit">Enviar</button>
          </form>
        </>
      ) : null}
    </div>
  );
}

export default App;
