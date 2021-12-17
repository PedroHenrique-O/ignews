import styles from "./styles.module.scss";
import logo from "../../../public/images/logo.svg";
import Image from "next/image";
import { SignInButton } from "../SignInButton";

import { ActiveLink } from "../ActiveLink";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logo} width="100" height="100" alt="logosvg" />

        <nav>
          <ActiveLink activeClassName={styles.active} href="/" prefetch>
            <a> Home </a>
          </ActiveLink>

          <ActiveLink activeClassName={styles.active} href="/posts" prefetch>
            <a> Posts </a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
