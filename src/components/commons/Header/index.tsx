"use client";

import Image from "next/image";
import header from "@/images/header.png";
import headerMobile from "@/images/header-mobile.png";

import { useCheckMobileScreen } from "@/hooks/useCheckMobileScreen";

import styles from "./header.module.css";

function Header() {
  const isMobile = useCheckMobileScreen();
  const headerClass = `container ${styles.header} ${
    isMobile ? styles.mobileHeight : styles.desktopHeight
  }`;

  return (
    <header className={headerClass}>
      <Image src={isMobile ? headerMobile : header} alt="Cabeçalho" />
    </header>
  );
}

export default Header;
