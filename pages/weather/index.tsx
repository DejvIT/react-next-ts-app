import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { memo, useMemo } from 'react';
import { Container } from 'react-bootstrap';

import type { GetServerSideProps, NextPage } from 'next';

import { Layout, WeatherTable } from '@app/components';
import { getWeatherData } from '@app/sdk/content';
import { WeatherDataResponse, WeatherItem, WeatherUnits } from '@app/types';

interface Props {
  weatherData: WeatherDataResponse;
}

const Weather: NextPage<Props> = (props) => {
  const { weatherData } = props;
  const { t } = useTranslation('common');

  const units: WeatherUnits = useMemo(() => weatherData.properties.meta.units, [weatherData]);
  const timeseries: WeatherItem[] = useMemo(() => weatherData.properties.timeseries, [weatherData]);

  return (
    <Layout title={t('weather.title')}>
      <Container>
        <h1 className="text-center">{t('weather.headline')}</h1>
        <WeatherTable units={units} weatherItems={timeseries} />
      </Container>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context;

  let weatherData = null;

  try {
    weatherData = await getWeatherData(49.054292, 20.294273);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('one of async functions failed with error:', e);
  }

  return {
    props: {
      locale,
      weatherData,
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
};

export default memo(Weather);
