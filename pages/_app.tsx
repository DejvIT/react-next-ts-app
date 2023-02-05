import Router, { useRouter, withRouter } from 'next/router';
import { appWithTranslation } from 'next-i18next';
import React, { useEffect } from 'react';

import type { AppProps } from 'next/app';

import { AppStateProvider } from '@app/contexts';
import '@app/styles/app.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (router?.isReady) {
      return () => {
        Router.events.off('routeChangeComplete', handleRouteChange);
      };
    }
  }, [router]);

  const handleRouteChange = (url: string) => {
    const urlWithoutQueryParams = url.split('?')[0];
    /*
      handle GA events here in future
     */
    // eslint-disable-next-line no-console
    console.log(urlWithoutQueryParams);
  };

  return (
    <AppStateProvider>
      <Component {...pageProps} />
    </AppStateProvider>
  );
}

export default withRouter(appWithTranslation(MyApp));
