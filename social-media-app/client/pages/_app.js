import { UserProvider } from '../context';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../components/nav.js';
import Head from "next/head";

// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import "antd/dist/reset.css";

export default function MyApp({ Component, pageProps }) {
    return(
    <UserProvider>
    <Head>
        <link rel="stylesheet" href="/css/styles.css" />
    </Head>
       <Nav /> 
       <ToastContainer position="top-center"/>
    <Component {...pageProps} />
    </UserProvider> 
    ) 
  }