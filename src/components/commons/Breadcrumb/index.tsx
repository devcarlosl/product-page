"use client";

import Link from "next/link";
import styles from "./breadcrumb.module.css";
import { useCheckMobileScreen } from "@/hooks/useCheckMobileScreen";

const routes = [
  { name: "Home /", url: "/" },
  { name: "Products /", url: "/products" },
  { name: "Comunicação /", url: "/communication" },
  { name: "Telefones /", url: "/phones" },
  { name: "IP/VOIP /", url: "/ip" },
  { name: "V5502 - Telefone IP", url: "/phone-ip" },
];

function Breadcrumb() {
  const isMobile = useCheckMobileScreen();

  return (
    <nav className={styles.breadcrumbContainer}>
      <ul className={styles.breadcrumbWrapper}>
        {isMobile ? (
          <li>
            <Link href={routes[0].url} className={styles.breadcrumbLink}>
              {`${routes[0].name} .../ `}
              <span className={styles.breadcrumbLinkActive}>
                {routes[routes.length - 1].name}
              </span>
            </Link>
          </li>
        ) : (
          routes.map((route, index) => (
            <li key={index}>
              <Link
                href={route.url}
                className={`${styles.breadcrumbLink} ${
                  index === routes.length - 1 ? styles.breadcrumbLinkActive : ""
                }`}
              >
                {route.name}
              </Link>
            </li>
          ))
        )}
      </ul>
    </nav>
  );
}

export default Breadcrumb;
