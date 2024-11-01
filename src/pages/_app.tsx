// Ваш файл, например, App.tsx
import React from 'react';
import { AppProps } from 'next/app';

import '../styles/globals.sass';
import Layout from '../components/Layout.tsx';
import ErrorBoundary from '../components/ErrorBoundary.tsx';
import {StoreProvider} from "../stores/storeContext.tsx";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <StoreProvider>
            <ErrorBoundary>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ErrorBoundary>
        </StoreProvider>
    );
};

export default App;
