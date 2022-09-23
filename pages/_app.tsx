import "../styles/globals.css";
import "react-calendar-heatmap/dist/styles.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
