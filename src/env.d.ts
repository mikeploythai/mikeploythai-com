/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly GH_AUTH_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
