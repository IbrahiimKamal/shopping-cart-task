import styles from './InputSearch.module.scss';

const InputSearch = () => {
  return (
    <form className={styles.formStyle}>
      <input type="text" className={styles.inputSearch} placeholder="Search" />
      <img
        src="/images/searchIcon.svg"
        className={styles.searchIconStyle}
        alt="searchIcon"
      />
    </form>
  );
};

export default InputSearch;
