import "../styles/globals.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (document !== undefined) {
      document.documentElement.style.setProperty(
        "--scrollbar-width",
        window.innerWidth - document.documentElement.clientWidth
      );
    }
  }, []);
  return (
    <div className="w-full h-tall">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
