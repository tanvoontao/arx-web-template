import '@/styles/globals.css'
import "@/styles/nprogress.css";

import Providers from '@/components/Providers/Providers'
import { useEffect } from 'react'
import { Router } from 'next/router'
import NProgress from "nprogress";


Router.events.on('routeChangeStart', () => {
    NProgress.start()
})
Router.events.on('routeChangeError', () => {
    NProgress.done()
})
Router.events.on('routeChangeComplete', () => {
    NProgress.done()
})

export default function App({ Component, pageProps, emotionCache }) {

    return (
        <>
            <Providers emotionCache={emotionCache}>
                <Component {...pageProps} />
            </Providers>
        </>
    )
}


