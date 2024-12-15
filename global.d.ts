declare global {
  interface Window {
    daum: {
      Postcode: new (config: any) => any;
    };
  }
}

export {};
