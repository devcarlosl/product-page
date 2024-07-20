import InstallerIcon from "@/icons/desktop/icon_tecnico.svg";

import Button from "../Button";

import styles from "./find-installer.module.css";

function FindInstaller() {
  return (
    <div className={`flex-center ${styles.findInstallerContainer}`}>
      <div className={`flex-center ${styles.findInstallerWrapper}`}>
        <i className="flex-center">
          <InstallerIcon />
        </i>
        <span className={styles.findInstallerText}>
          Este produto deve ser configurado por um
          <br />
          <b className={styles.findInstallerTextBold}>técnico qualificado.</b>
        </span>
      </div>
      <Button text="Encontre um instalador" />
    </div>
  );
}

export default FindInstaller;
