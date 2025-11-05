
import { useState, useEffect } from 'react';

const SETTINGS_KEY = 'matchfield-settings';
const SETTINGS_VERSION = 1;

interface Settings {
  version: number;
  matchMultipleShapes: boolean;
}

const defaultSettings: Settings = {
  version: SETTINGS_VERSION,
  matchMultipleShapes: true,
};

const getStoredSettings = (): Settings => {
  try {
    const stored = localStorage.getItem(SETTINGS_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed.version === SETTINGS_VERSION) {
        return parsed;
      }
    }
  } catch (error) {
    console.error('Error reading settings from local storage:', error);
  }
  return defaultSettings;
};

export const useStoredState = <T>(
  key: keyof Settings,
): [T, (value: T) => void] => {
  const [settings, setSettings] = useState<Settings>(getStoredSettings);

  useEffect(() => {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch (error) {
      console.error('Error writing settings to local storage:', error);
    }
  }, [settings]);

  const setValue = (value: T) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return [settings[key] as T, setValue];
};
