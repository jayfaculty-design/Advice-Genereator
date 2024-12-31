import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";

function App() {
  const [advices, setAdvices] = useState([]);
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");

  function handleCount() {
    setCount((prevCount) => prevCount + 1);
  }

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://api.adviceslip.com/advice",
    })
      .then((response) => {
        setAdvices([response.data.slip]);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  }, [count]);

  return (
    <>
      {advices.map((item) => {
        return (
          <div
            key={item.id}
            className="relative flex flex-col items-center border border-darkGrayishBlue rounded-xl bg-darkGrayishBlue p-5 pb-20 gap-7"
          >
            <p className="text-[12px] tracking-[5px] text-neonGreen uppercase">
              ADVICE #{item.id}
            </p>
            <p className="text-[28px] font-extrabold leading-10 text-center">
              “{item.advice}”
            </p>
            <img src="/images/pattern-divider-mobile.svg" alt="divider" />
            <div
              onClick={() => handleCount()}
              className="btn absolute bg-neonGreen p-5 rounded-full cursor-pointer bottom-[-30px]"
            >
              <img src="/images/icon-dice.svg" alt="dice" />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default App;
