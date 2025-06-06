declare module "*.mp4" {
    const src: string;
    export default src;
  }
  
  export {};

declare global {
  interface Window {
    lottie: {
      loadAnimation: (params: any) => void;
      // Add more Lottie functions here if needed
    };
  }
}
