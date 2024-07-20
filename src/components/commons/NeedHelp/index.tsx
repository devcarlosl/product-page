"use client";

import Link from "next/link";

import { useCheckMobileScreen } from "@/hooks/useCheckMobileScreen";

import ChevronRightIcon from "@/icons/desktop/icon_angle_right_white.svg";

import NeedHelpMiniCarousel from "./components/NeedHelpMiniCarousel";

import { needHelpOptions } from "./utils";

import styles from "./need-help.module.css";

function NeedHelp() {
  const isMobile = useCheckMobileScreen();

  return (
    <div className={styles.needHelpContainer}>
      <h4 className={styles.needHelpTitle}>Você precisa de ajuda?</h4>
      {isMobile ? (
        <NeedHelpMiniCarousel />
      ) : (
        <div className={styles.needHelpOptionsContainer}>
          {needHelpOptions.map((option, index) => (
            <Link href="#" key={index} className={styles.needHelpOption}>
              <i>{option.icon}</i>
              <span className={styles.needHelpOptionText}>{option.text}</span>
              <i>
                <ChevronRightIcon />
              </i>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default NeedHelp;
