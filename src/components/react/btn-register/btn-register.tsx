import { useBoolean, useLocalStorage } from "@shared/hooks";
import { useEffect } from "react";
import { Icons } from "..";
import style from "./btn-register.module.css";
import { Spinner } from "../spinner/spinner";
import { differenceInMinutes } from "date-fns";
import { editMonth, editYear } from "@shared/helpers";
import type { CodeMonthType } from "@shared/types";

interface PropsBtnRegister {
  id: string;
  minutesDB: number;
  yearTime: number;
  year: number;
}

export const BtnRegister = ({
  id,
  minutesDB,
  year,
  yearTime,
}: PropsBtnRegister) => {
  const storage = useLocalStorage();
  const spinner = useBoolean();
  const month = new Date().getMonth();

  useEffect(() => {
    storage.getStorage("time");
  }, []);

  const onRegisterTime = async () => {
    if (!storage.value) {
      storage.setStorage("time", `${new Date()}`);
      return;
    }
    spinner.onTrue();
    const result = differenceInMinutes(new Date(), new Date(storage.value));
    const setMonth = editMonth(result + minutesDB)[month as CodeMonthType];
    const isSaved = await fetch("http://localhost:4321/api/register", {
      method: "PUT",
      body: JSON.stringify({
        _id: id,
        month: setMonth,
        year: editYear(year, result + yearTime),
      }),
    });
    //   console.log("🚀 ~ onRegisterTime ~ result + yearTime:", result + yearTime)
    spinner.onFalse();
    storage.setStorage("time", "");
    isSaved.status === 200 ? window.location.reload() : alert("error");
  };
  return (
    <>
      <button onClick={onRegisterTime} className={style.button}>
        <Icons.time type={storage.value ? "close" : "add"} />
        {storage.value ? "detener tiempo" : "iniciar tiempo"}
      </button>
      {spinner.value && <Spinner />}
    </>
  );
};
