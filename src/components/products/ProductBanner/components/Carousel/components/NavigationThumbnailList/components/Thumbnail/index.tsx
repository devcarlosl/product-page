"use client";

import Image from "next/image";

import { useCheckMobileScreen } from "@/hooks/useCheckMobileScreen";

import CircleNavGrayIcon from "@/icons/mobile/circle_nav_gray.svg";
import CircleNavGreenIcon from "@/icons/mobile/circle_nav_green.svg";

import styles from "./thumbnail.module.css";

interface ThumbnailProps {
  imageUrl: string;
  imageAlt: string;
  onClick: () => void;
  isActive: boolean;
}

function Thumbnail({ imageUrl, imageAlt, onClick, isActive }: ThumbnailProps) {
  const isMobile = useCheckMobileScreen();

  return (
    <>
      {isMobile ? (
        <div>{isActive ? <CircleNavGreenIcon /> : <CircleNavGrayIcon />}</div>
      ) : (
        <div
          className={
            isActive ? `${styles.thumbnail} ${styles.active}` : styles.thumbnail
          }
        >
          <Image src={imageUrl} alt={imageAlt} fill onClick={onClick} />
        </div>
      )}
    </>
  );
}

export default Thumbnail;
