import style from "./notifications.module.css";
import { Icons } from "..";

interface Props {
  message: string;
  type: "success" | "error";
}

export const UiNotifications = ({ message, type }: Props) => {
  return (
    <div className={style.notifications}>
      {type === "error" ? (
        <Icons.Error className={style.icon} />
      ) : (
        <Icons.Success className={style.icon} />
      )}
      <p>{message}</p>
    </div>
  );
};
