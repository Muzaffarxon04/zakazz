import "../src/Assets/scss/main.scss";
import { wrapper } from "../store/store";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  <Head>
  <link rel="shortcut icon" href="/loco.png" />
  <title>ГОСУДАРСТВЕННАЯ СЛУЖБА РЕСПУБЛИКИ УЗБЕКИСТАН ПО СЛЕЖЕНИЮ ЗА ОПАСНЫМИ ГЕОЛОГИЧЕСКИМИ ПРОЦЕССАМИ</title>

  </Head>
  return <Component {...pageProps} Url="https://gifster.mesi.pro"/>;
}

export default wrapper.withRedux(MyApp);
