interface ImportMetaEnv {
  readonly VITE_OPENAI_API_KEY: string;
  // أضف أي متغيرات أخرى هنا
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
