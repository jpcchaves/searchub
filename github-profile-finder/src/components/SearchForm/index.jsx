// CSS
import styles from "./SearchForm.module.css";

const SearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id={styles.form_wrapper}>
      <h3>Busque seu Usuário</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          <span>Digite seu nome de usuário:</span>
          <input type="text" placeholder="Nome de usuário..." />
          <input type="submit" value="Buscar" />
        </label>
      </form>
    </div>
  );
};

export default SearchForm;
