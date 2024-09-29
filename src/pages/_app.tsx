import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.sass';
import Layout from "../components/Layout.tsx";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
};

export default App;
