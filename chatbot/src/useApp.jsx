import { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, query, onSnapshot } from "firebase/firestore";

// Custom hook to manage the app state
export default function useApp() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await signInWithEmailAndPassword(
      auth,
      formValues.email,
      formValues.password
    );
    setUser(response.user);
  };

  useEffect(() => {
    if (user) {
      const q = query(collection(db, "messages"));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const dbMessages = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessages(dbMessages);
      });
      return () => unsubscribe();
    }
  }, [user]);

  return {
    formValues,
    setFormValues,
    user,
    messages,
    setMessages,
    handleSubmit,
  };
}
