/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_BASE_POSTS_URL: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }