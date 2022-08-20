// css
import styles from "./Advices.module.css";
// hooks
import { useState, useEffect } from "react";

const Advices = () => {
  // Advice Data
  const [adviceData, setAdviceData] = useState("");

  const [updateAdvice, setUpdateAdvice] = useState(0);

  //  Advice URL
  const adviceURL = `https://api.adviceslip.com/advice`;

  // Advice Fetch
  useEffect(() => {
    const getAdvice = async (url) => {
      const res = await fetch(url)
        .then((res) => res.json())
        .catch((err) => err);
      setAdviceData(res);
    };
    getAdvice(adviceURL);
  }, [updateAdvice, adviceURL]);

  const handleClick = () => {
    setUpdateAdvice((prev) => prev + 1);
  };

  return (
    <>
      {/* Advice Rendering */}
      <div id={styles.advice_wrapper}>
        <h2>Peça um conselho e sinta-se melhor!</h2>
        <p>{updateAdvice > 0 ? adviceData.slip.advice : ""}</p>
        <button onClick={handleClick}>Preciso de um Conselho</button>
      </div>
    </>
  );
};

export default Advices;
