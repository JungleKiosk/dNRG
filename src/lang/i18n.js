// src/i18n.js
import { createI18n } from 'vue-i18n';

// Traduzioni
const messages = {
  it: {
    navbar: {
      home: 'Home',
      about: 'Chi Siamo',
      contact: 'Contatti',
      language: 'Lingua',
    },
    home: {
      title: 'Benvenuto su bioNRG🌳',
      description: 'Calcola il dimensionamento aziendale per un impianto a Biogas.',
      choose_diet: 'Scegli la Dieta per il tuo Impianto Biogas',
    },
    button: {
      read_more: 'Scopri di più',
    }
  },
  en: {
    navbar: {
      home: 'Home',
      about: 'About Us',
      contact: 'Contact',
      language: 'Language',
    },
    home: {
      title: 'Welcome to bioNRG🌳',
      description: 'Calculate the company sizing for a Biogas plant.',
      choose_diet: 'Choose the Diet for your Biogas Plant',
    },
    button: {
      read_more: 'Read More',
    }
  }
};

// Crea l'istanza i18n
const i18n = createI18n({
  locale: 'it', // lingua predefinita
  fallbackLocale: 'en', // lingua di riserva
  messages,
});

export default i18n;
