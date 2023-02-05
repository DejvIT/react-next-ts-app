import { MDBCol, MDBRow } from 'mdb-react-ui-kit';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { memo, useMemo } from 'react';

import type { GetServerSideProps, NextPage } from 'next';

import { Layout } from '@app/components';
import { PORTFOLIO_ITEMS_DESKTOP, PORTFOLIO_ITEMS_MOBILE } from '@app/constants';

const Portfolio: NextPage = () => {
  const { t } = useTranslation('common');

  const renderPortfolioItemsMemo = useMemo(() => {
    const chunkSizeMobile = 2;
    const chunkedImagesMobile = [];
    for (let i = 0; i < PORTFOLIO_ITEMS_MOBILE.length; i += chunkSizeMobile) {
      chunkedImagesMobile.push(PORTFOLIO_ITEMS_MOBILE.slice(i, i + chunkSizeMobile));
    }
    const chunkSizeDesktop = 5;
    const chunkedImagesDesktop = [];
    for (let i = 0; i < PORTFOLIO_ITEMS_DESKTOP.length; i += chunkSizeDesktop) {
      chunkedImagesDesktop.push(PORTFOLIO_ITEMS_DESKTOP.slice(i, i + chunkSizeDesktop));
    }

    return (
      <MDBRow>
        {chunkedImagesMobile.map((chunk, index) => (
          <MDBCol className="mb-4 mb-lg-0" key={index} lg={4} md={12}>
            {chunk.map(({ src, altText }, i) => (
              <img alt={altText} className="w-100 shadow-1-strong rounded mb-4 rounded" key={i} src={src} />
            ))}
          </MDBCol>
        ))}
        {chunkedImagesDesktop.map((chunk, index) => (
          <MDBCol className="mb-4 mb-lg-0" key={index} lg={6} md={6} xs={12}>
            {chunk.map(({ src, altText }, i) => (
              <img alt={altText} className="w-100 shadow-1-strong rounded mb-4 rounded" key={i} src={src} />
            ))}
          </MDBCol>
        ))}
      </MDBRow>
    );
  }, []);

  return (
    <Layout title={t('portfolio.title')}>
      <h1 className="text-center" style={{ margin: '56px 0' }}>
        {t('portfolio.headline')}
      </h1>
      <h4 className="text-center">{t('portfolio.description')}</h4>
      {renderPortfolioItemsMemo}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context;
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
};

export default memo(Portfolio);
