import styles from './InputSearch.module.scss';

const InputSearch = () => {
  return (
    <div className={styles.cartStyle}>
      <form className={styles.formStyle}>
        <input
          type="text"
          className={styles.inputSearch}
          placeholder="Search"
        />
        <img
          src="/images/searchIcon.svg"
          className={styles.searchIconStyle}
          alt="searchIcon"
        />
      </form>
    </div>
  );
};

export default InputSearch;
