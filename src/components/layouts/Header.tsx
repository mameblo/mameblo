import Nav from "../../components/layouts/Nav";
import styles from "../../styles/Layouts/Header.module.scss";

export default function Header() {
  return (
    <header className={styles.mainHeader}>
      <Nav />
    </header>
  );
}
