// CSS
import styles from "./Profile.module.css";

import { useEffect, useState } from "react";

const Profile = () => {
  const [profileData, setProfileData] = useState();

  const [advice, setAdvice] = useState("");

  const baseURL = `https://api.adviceslip.com/advice`;

  useEffect(() => {
    const getProfile = async (url) => {
      const res = await fetch(url);
      const data = await res.json();

      setProfileData(data);
    };

    getProfile(baseURL);
  }, [advice]);

  return (
    <div id={styles.advice_wrapper}>
      <h2>Peça um conselho e sinta-se melhor!</h2>
      <p>{advice && profileData.slip.advice}</p>
      <button onClick={() => setAdvice((prevState) => prevState + 1)}>
        Preciso de um Conselho
      </button>
    </div>
  );
};

export default Profile;
