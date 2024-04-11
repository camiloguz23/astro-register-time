"use client";

import { useForm } from "react-hook-form";
import { UiInput } from "../input/ui-input";
import { toast } from "sonner";
import style from "./ui-form.module.css";
import { type LoginModel } from "@shared/types";
import { Spinner } from "../spinner/spinner";
import { useBoolean } from "@shared/hooks";
import { endpoint } from "@shared/constantes";

export const UiFormLogin = () => {
  const spinner = useBoolean();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<LoginModel>({
    mode: "onBlur",
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    spinner.onTrue();
    fetch(`https://register-time.pages.dev/api/login`, {
      method: "POST",
      body: JSON.stringify(data),
    }).then(() => {
      spinner.onFalse();
      window.location.reload();
    });
    // const isSession = await onLogin(data);

    // isSession === false &&
    //   toast.error("My error toast", {
    //     style: { backgroundColor: "hsla(0,50%,50%,0.4)" },
    //   });
  });
  return (
    <>
      <form onSubmit={onSubmit} className={style.form}>
        <h4 className={style.title}>Iniciar Sesion</h4>
        <UiInput
          type="email"
          register={{
            ...register("email", {
              required: {
                value: true,
                message: "El correo es obligatorio",
              },
            }),
          }}
          messages={errors?.email?.message}
        />
        <button
          type="submit"
          disabled={!isValid}
          className={style["btn-login"]}
        >
          Enviar
        </button>
      </form>
      {spinner.value && <Spinner />}
    </>
  );
};
