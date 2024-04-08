import { useState } from 'react';

export const useBoolean = () => {
  const [value, setValue] = useState<boolean>(false);

  const onTrue = () => setValue(true);
  const onFalse = () => setValue(false);
  const onToggle = () => setValue(!value);

  return {
    value,
    onFalse,
    onToggle,
    onTrue
  };
};
