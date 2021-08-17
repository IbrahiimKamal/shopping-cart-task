import styles from './EmailInput.module.scss';

const EmailInput = () => {
  return (
    <form className={styles.formStyle}>
      <input
        className={styles.inputStyle}
        type="email"
        placeholder="Enter Your Mail"
      />
      <span className={styles.sendIcon}>
        <span className={styles.sendText}>Subscribe</span>
        <img src="/images/sendIcon.svg" alt="icon" style={{ width: 15 }} />
      </span>
    </form>
  );
};

export default EmailInput;
