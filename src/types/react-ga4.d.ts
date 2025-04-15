declare module 'react-ga4' {
  export function initialize(measurementId: string | string[]): void;
  export function send(event: {
    hitType: string;
    page: string;
  }): void;
}