/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PHONE_E164?: string;
  readonly VITE_WHATSAPP_PREFILL?: string;
  readonly VITE_INSTAGRAM_URL?: string;
  readonly VITE_MAPS_EMBED_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
