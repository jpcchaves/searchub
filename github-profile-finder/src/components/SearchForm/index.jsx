// CSS
import { useState } from "react";
import Advices from "../Advices";
import Profile from "../Profile";
import styles from "./SearchForm.module.css";

const SearchForm = () => {
  const [profileName, setProfileName] = useState("");
  const [finalName, setFinalName] = useState("");

  console.log(profileName);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id={styles.form_wrapper}>
      <h3>Procure seu Perfil no GitHub</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          <span>Digite seu nome de usuário:</span>
          <input
            type="text"
            placeholder="Nome de usuário..."
            onChange={(e) => setProfileName(e.target.value)}
          />
          <input
            type="submit"
            value="Buscar"
            onClick={() => setFinalName(profileName)}
          />
        </label>
      </form>
      <Profile userName={finalName} />
      <Advices />
    </div>
  );
};

export default SearchForm;
