import style from './input.module.css';

interface PropInput {
  type: React.HTMLInputTypeAttribute;
  name?: string;
  placeholder?: string;
  register: any;
  messages?: string;
}

export const UiInput = ({ type, name, placeholder, register, messages }: PropInput) => {
  return (
    <div className={style.contentInput}>
      <input className={style.input} type={type} name={name} placeholder={placeholder} {...register} />
      <span className={style.error}>{messages}</span>
    </div>
  );
};
