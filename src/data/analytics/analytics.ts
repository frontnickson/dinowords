// analytics.ts
import ReactGA from 'react-ga4';

// Инициализация Google Analytics
export const initGA = () => {
  ReactGA.initialize('G-8YJYGJTMSE'); // Здесь ваш Measurement ID из Google Analytics
};

// Отправка события регистрации
export const trackSignUp = () => {
  ReactGA.event({
    category: 'User',
    action: 'sign_up',
    label: 'Registration',
  });
};
