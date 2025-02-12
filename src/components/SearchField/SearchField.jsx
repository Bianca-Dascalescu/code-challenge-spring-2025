import styles from "./SearchField.module.css";

const SearchField = ({ onChange }) => {
  return (
    <div className={styles.wrapper}>
      <input placeholder="Filter dishes..." type="text" onChange={onChange} />
    </div>
  );
};

export default SearchField;
