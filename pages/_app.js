import "../src/Assets/scss/main.scss";
import { wrapper } from "../store/store";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} Url="https://gifster.mesi.pro"/>;
}

export default wrapper.withRedux(MyApp);
