import React, { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import i18n from '../i18n';  // Import your i18n configuration
import Wrapper from './layout/wrapper'; // Adjust the path to your Wrapper component
import Home9 from "./home/home_9";// Adjust the path to your Home9 component

const EventEmitter = require('events');
EventEmitter.defaultMaxListeners = 30;

const MainRoot = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    console.log('Current language:', i18n.language);
  }, [i18n]);


  return (
    <I18nextProvider i18n={i18n}>
      <Wrapper>
        <Home9 />
      </Wrapper>
    </I18nextProvider>
  );
};

export default MainRoot;