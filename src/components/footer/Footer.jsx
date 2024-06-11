import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>litdev</div>
      <div className={styles.text}>
        LIT Technology © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
