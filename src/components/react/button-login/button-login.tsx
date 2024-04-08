import { useBoolean } from "@shared/hooks";
import { UiFormLogin } from "../form-login/ui-form-login";
import { UiModal } from "../modal/ui-modal";
import styles from "./button-login.module.css";
import { useState } from "react";

export const ButtonLogin = () => {
  const open = useBoolean();
  return (
    <>
      <button onClick={() => open.onTrue()} className={styles["btn-link"]}>
        Button
      </button>
      {open.value && (
        <UiModal onClose={() => open.onFalse()}>
          <UiFormLogin />
        </UiModal>
      )}
    </>
  );
};
