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
    action: 'new_user',
    label: 'Registration',
  });
};

export const trackPracticsWords = () => {
  ReactGA.event({
    category: 'user',
    action: 'practics_words',
    label: 'Practics',
  })
}

export const trackPracticsImages = () => {
  ReactGA.event({
    category: 'user',
    action: 'practics_images',
    label: 'Practics',
  })
}

