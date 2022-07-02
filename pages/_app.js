import "../src/Assets/scss/main.scss";
import { wrapper } from "../store/store";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} Url="http://46.101.231.43:7070"/>;
}

export default wrapper.withRedux(MyApp);
