import "../styles/globals.css";
import "../styles/react-calendar-heatmap.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
