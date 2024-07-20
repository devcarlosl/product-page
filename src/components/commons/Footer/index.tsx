"use client";

import Image from "next/image";
import footer from "@/images/footer.png";
import footerMobile from "@/images/footer-mobile.png";

import { useCheckMobileScreen } from "@/hooks/useCheckMobileScreen";

import styles from "./footer.module.css";

function Footer() {
  const isMobile = useCheckMobileScreen();
  const footerClass = `container ${styles.footer} ${
    isMobile ? styles.mobileHeight : styles.desktopHeight
  }`;

  return (
    <footer className={footerClass}>
      <Image src={isMobile ? footerMobile : footer} alt="Rodapé" />
    </footer>
  );
}

export default Footer;
