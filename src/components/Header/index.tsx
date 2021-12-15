import styles from "./styles.module.scss";
import logo from "../../../public/images/logo.svg";
import Image from "next/image";
export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logo} width="100" height="100" alt="logosvg" />

        <nav>
          <a className={styles.active}> Home </a>
          <a> Posts </a>
        </nav>
      </div>
    </header>
  );
}
