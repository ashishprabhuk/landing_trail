/// <reference types="vite/client" />

declare module '*.glb' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const src: string;
  export default src;
}