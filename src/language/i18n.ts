import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import kr from './kr.json';
import en from './en.json';

i18n.use(initReactI18next).init({ resources: { en, kr } });
