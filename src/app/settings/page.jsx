'use client';
import React, { useState, useEffect } from 'react';
import styles from './settings.module.scss';

const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(false); 

  // Load dark mode preference from localStorage after component mounts
  useEffect(() => {
    const storedTheme = JSON.parse(localStorage.getItem('darkMode')) || false;
    setDarkMode(storedTheme);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', JSON.stringify(newMode));
      return newMode;
    });
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className={styles.settingsPage}>
      <div className={styles.header}>
        <h1>Settings</h1>
        <p>Adjust your display preferences</p>
      </div>
      <div className={styles.hRow}></div>
      <div className={styles.toggleContainer}>
        <span>Dark Mode</span>
        <label className={styles.switch}>
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          <span className={styles.slider}></span>
        </label>
      </div>
    </div>
  );
};

export default SettingsPage;
