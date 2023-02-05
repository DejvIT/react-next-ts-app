import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { memo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import type { GetServerSideProps, NextPage } from 'next';

import { Layout } from '@app/components';

import styles from './index.module.scss';

const Weather: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <Layout title={t('calendar.title')}>
      <Container>
        <h1 className="text-center" style={{ margin: '56px 0' }}>
          {t('calendar.title')}
        </h1>
        <Row>
          <Col lg={6}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at delectus dolore enim eveniet ipsa,
              maiores nihil non perspiciatis quam qui quia quos! Amet aspernatur at consequuntur facere laborum
              obcaecati.
            </p>
          </Col>
          <Col lg={6}>
            <p className={styles.terms}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, culpa cum excepturi neque nulla quae
              qui similique voluptatibus. Commodi, corporis iusto quia totam vitae voluptatibus? Perferendis porro
              quaerat quasi. Eum.
            </p>
          </Col>
        </Row>
      </Container>
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

export default memo(Weather);
