import { initialize, gtag } from 'react-ga4';

export const initGA = () => {
  initialize('G-8YJYGJTMSX'); // ← замени на свой Measurement ID
};

export const trackSignUp = (method: string = 'email') => {
  gtag('event', 'sign_up', {
    method,
  });
};

