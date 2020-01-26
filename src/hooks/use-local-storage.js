import { useState } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    const item = JSON.parse(window.localStorage.getItem(key));

    if (item) {
      return item.value;
    }

    return initialValue;
  });

  const setValue = value => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;

    setStoredValue(valueToStore);

    window.localStorage.setItem(key, JSON.stringify({ value: valueToStore }));
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
