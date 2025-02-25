import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageChanger = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value); // Change the language
  };

  return (
    <select value={i18n.language} onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="fr">French</option>
      <option value="ar">Arabic</option>
    </select>
  );
};

export default LanguageChanger;