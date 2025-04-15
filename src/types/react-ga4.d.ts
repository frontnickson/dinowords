// declare module 'react-ga4' {
//   export function initialize(measurementId: string | string[]): void;
//   export function send(event: {
//     hitType: string;
//     page: string;
//   }): void;
// }

declare module 'react-ga4' {
  export function initialize(measurementId: string | string[]): void;

  export function gtag(
      command: 'event' | 'config' | 'set',
      eventNameOrConfig: string,
      params?: Record<string, string | number | boolean | undefined>
  ): void;
}
