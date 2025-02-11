import { useEffect, useState } from "react";

export default function RelogioFuncional() {
  const [hora, setHora] = useState(new Date());
  const [counter, setCounter] = useState(0);
  const [counterDouble, setCounterDouble] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const handleCounter = () => {
    if (!counter) return;

    setCounterDouble(counter + 2);
  };

  useEffect(handleCounter, [counter]);

  return (
    <>
      <h1>Hora atual:{hora.toLocaleTimeString()}</h1>
      <div>
        <h3>Counter {counter}</h3>
        <button onClick={() => setCounter(counter + 1)}>Increment +1</button>
      </div>
      <div>
        <h3>Counter double {counterDouble}</h3>
      </div>
    </>
  );
}
