// src/pages/_app.tsx
import "bootstrap/dist/css/bootstrap.min.css"; // ← primero Bootstrap
import "@/styles/globals.css";                 // ← luego tus estilos (sobrescriben a Bootstrap)
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
