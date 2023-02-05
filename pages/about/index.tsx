import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { memo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import type { GetServerSideProps, NextPage } from 'next';

import { Layout } from '@app/components';

const Weather: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <Layout title={t('about.title')}>
      <Container>
        <h1 className="text-center" style={{ margin: '56px 0' }}>
          {t('about.title')}
        </h1>
        <Row>
          <Col lg={4}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur facilis minima natus possimus velit!
              Doloremque eius inventore laudantium molestiae nostrum recusandae suscipit velit. Alias amet dolor earum
              eveniet explicabo facere illum ipsa iste magnam nostrum, officiis porro quam quos reiciendis tenetur totam
              unde veniam?
            </p>
          </Col>
          <Col lg={4}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis, cupiditate earum illo
              laboriosam modi nemo provident ratione repellendus sequi.
            </p>
          </Col>
          <Col lg={4}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis, cupiditate earum illo
              laboriosam modi nemo provident ratione repellendus sequi.
            </p>
          </Col>
          <hr />
          <Col lg={12}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet aspernatur assumenda atque aut beatae
              consequuntur cumque dicta dolore facilis, harum ipsam minima molestias non porro, qui quisquam ratione
              voluptatibus.
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
