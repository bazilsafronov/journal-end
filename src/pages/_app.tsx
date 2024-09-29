import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.sass';
import Layout from "../components/Layout.tsx";
import ErrorBoundary from "../components/ErrorBoundary.tsx";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ErrorBoundary>
        <Layout>
            <Component {...pageProps} />
        </Layout>
        </ErrorBoundary>
    );
};

export default App;
