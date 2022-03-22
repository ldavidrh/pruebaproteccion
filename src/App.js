import { useState } from "react";
import useDate from "./hooks/useDate";

function App() {
  const now = useDate();
  const [sequence, setSequence] = useState(null);
  const [msg, setMsg] = useState(null);

  const calculateFib = () => {
    let fibSequence = [];
    let seed =
      now.minutes >= 10
        ? now.minutes.toString().split("").map(Number)
        : [0, now.minutes];
    let count = now.seconds;
    fibSequence = [...seed];

    for (let i = 0; i < count; i++) {
      fibSequence.push(fibSequence[i] + fibSequence[i + 1]);
    }

    setMsg(
      `La secuencia para la semilla ${seed} y ${count} iteraciones es:`,
      fibSequence
    );

    setSequence(fibSequence);
  };

  return (
    <div className="h-fit w-screen flex justify-center items-center">
      <div className="w-4/5 h-fit shadow-xl rounded-xl p-10 my-4 bg-white">
        <h1 className="text-3xl text-center font-semibold m-4">
          Generador de secuencia de Fibonnaci
        </h1>
        <h1 className="text-lg font-semibold">Hora actual: {now.time}</h1>
        <p className="text-base">
          Presione el boton para generar la sucesion de Fibonacci
        </p>
        <button
          onClick={() => calculateFib()}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-4"
        >
          Calcular fibonacci
        </button>
        {msg && <p className="text-xl mb-3">{msg}</p>}

        {sequence && (
          <p>
            {sequence.reduce(
              (previousValue, currentValue) =>
                `${previousValue}, ${currentValue}`
            )}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
