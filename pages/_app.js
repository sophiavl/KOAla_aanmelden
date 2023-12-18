import React from 'react';
import '../styles/globals.scss'

function MyApp({ Component, pageProps}) {
    return <Component {...pageProps}></Component>
}

export default MyApp;