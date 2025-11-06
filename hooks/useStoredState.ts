import { useState, useEffect } from 'react';

export const useStoredState = <T>(
  key: string,
  defaultValue: T,
): [T, (value: T) => void] => {
  // Initialize from localStorage synchronously
  const [value, setValue] = useState<T>(() => {
    if (typeof window === 'undefined') return defaultValue;
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : defaultValue;
    } catch (error) {
      console.error(`Error reading setting "${key}" from local storage:`, error);
      return defaultValue;
    }
  });

  // Write current value to localStorage whenever it changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error writing setting "${key}" to local storage:`, error);
    }
  }, [key, value]);

  // Re-read from localStorage when the key changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const stored = localStorage.getItem(key);
      const parsed = stored ? JSON.parse(stored) : defaultValue;

      // Only update if value actually differs
      if (JSON.stringify(parsed) !== JSON.stringify(value)) {
        setValue(parsed);
      }
    } catch (error) {
      console.error(`Error reloading setting "${key}" from local storage:`, error);
    }
  }, [key, value, defaultValue]);

  return [value, setValue];
};
