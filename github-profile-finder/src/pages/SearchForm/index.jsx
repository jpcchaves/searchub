// CSS
import Advices from "../../components/Advices";
import Profile from "../../components/Profile";
import styles from "./SearchForm.module.css";

const SearchForm = () => {
  return (
    <div id={styles.search_form_page}>
      <Profile />
      <Advices />
    </div>
  );
};

export default SearchForm;
