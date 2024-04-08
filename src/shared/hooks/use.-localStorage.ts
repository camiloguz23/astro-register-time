'use client';

import { useState } from 'react';

export const useLocalStorage = () => {
  const [value, setValue] = useState<string>('');

  const getStorage = (key: string) => {
    const data = localStorage.getItem(key);
    setValue(data ?? '');
  };

  const setStorage = (key: string, value: string) => {
    localStorage.setItem(key, value);
    getStorage(key)
  };

  return {
    value,
    getStorage,
    setStorage
  };
};
