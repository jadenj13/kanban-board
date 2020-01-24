import { useState } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);

      if (item && typeof initialValue === 'string') {
        return item;
      }

      if (Array.isArray(initialValue)) {
        return item ? item.split(';') : initialValue;
      }

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = value => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;

    setStoredValue(valueToStore);

    if (Array.isArray(value)) {
      window.localStorage.setItem(key, value.join(';'));
    } else {
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
