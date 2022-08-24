// css
import styles from "./Advices.module.css";
// hooks
import { useState, useEffect, useRef } from "react";

const Advices = () => {
  // loading state
  const [loading, setLoading] = useState(false);

  // Advice Data
  const [adviceData, setAdviceData] = useState("");

  // update advice
  const [uploadAdvice, setUploadAdvice] = useState(0);

  //  Advice URL
  const adviceURL = `https://api.adviceslip.com/advice`;

  const shouldGiveAdvice = useRef(true);

  // Advice Fetch
  useEffect(() => {
    if (uploadAdvice != 0) {
      const getAdvice = async () => {
        setLoading(true);
        if (shouldGiveAdvice.current) {
          shouldGiveAdvice.current = false;
          const res = await fetch(adviceURL)
            .then((res) => res.json())
            .catch((err) => err);
          setAdviceData(res);
          shouldGiveAdvice.current = true;
        }
        setLoading(false);
      };
      getAdvice();
    }
  }, [uploadAdvice]);

  return (
    <>
      {/* Advice Rendering */}
      <div id={styles.advice_wrapper}>
        <h2>Peça um conselho e sinta-se melhor!</h2>
        <p>{adviceData && adviceData.slip.advice}</p>
        {loading && <button disabled>Carregando...</button>}
        {!loading && (
          <button
            onClick={() => {
              setUploadAdvice((prevState) => prevState + 1);
            }}
          >
            Preciso de um Conselho
          </button>
        )}
      </div>
    </>
  );
};

export default Advices;
