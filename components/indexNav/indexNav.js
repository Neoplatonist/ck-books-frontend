import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './indexNav.module.css';
import HeaderLinks from './headerLinks';

function IndexNav() {
  const [isOpen, setIsOpen] = useState(false);

  let mobileNavClass = isOpen ? "" : "xs:hidden";

  const handleMobileNav = (e) => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles["l-header__nav"]}>
      <div className={styles["l-header-mobile__wrapper"]}>
        <button
          className={styles["c-header-mobile-nav"]}
          data-collapse-toggle="mobile-menu"
          type="button"
          onClick={handleMobileNav}
          aria-controls="mobile-menu-2"
          aria-expanded="false">
          <span className="sr-only">Open main menu</span>

          <svg className={styles["c-header-mobile-nav__menu"]}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        <ul className={[styles["l-nav-list"], mobileNavClass].join(" ")}>
          <li className={styles["l-nav-list__item c-nav"]}>
            <Link href="/dashboard" passHref>
              {/* <a className={styles["c-nav__link"]}>LOGIN</a> */}
              <a>
                <HeaderLinks>
                  LOGIN
                </HeaderLinks>
              </a>
            </Link>
          </li>

          <li className={styles["l-nav-list__item c-nav"]}>
            <Link href="/dashboard" passHref>
              {/* <a className={styles["c-nav__link"]}>CREATE NEW ACCOUNT</a> */}
              <a>
                <HeaderLinks>
                  CREATE NEW ACCOUNT
                </HeaderLinks>
              </a>
            </Link>
          </li>
        </ul>
      </div>

      <Link href="/">
        <a className={styles["c-logo"]}>
          <Image
            src="/images/logo_textonly_sm.png"
            alt="cuppa kappa logo"
            width={359}
            height={61}
          />
        </a>
      </Link>
    </nav>
  );
}

export default IndexNav;
