import Header from "../component/Header";
import "../styles/globals.scss";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Fr3 Next App</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
