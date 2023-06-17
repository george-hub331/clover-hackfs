import type { AppProps } from "next/app";
import axios from 'axios';


function MyApp({ Component, pageProps }: AppProps) {

  axios.defaults.baseURL = process.env.NEXT_PUBLIC_APP_URL || "";

  return (
      <GenProvider>
        <CCprovider>
            <Component {...pageProps} />
        </CCprovider>
      </GenProvider>
  );
}

export default MyApp;
