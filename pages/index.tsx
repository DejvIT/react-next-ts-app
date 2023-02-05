import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { memo } from 'react';
import { Container } from 'react-bootstrap';

import type { GetServerSideProps, NextPage } from 'next';

import { Layout, Slideshow } from '@app/components';
import { HOMEPAGE_SLIDESHOW_ITEMS } from '@app/constants';

import styles from './index.module.scss';

const Home: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <Layout title={t('home.title')}>
      <Slideshow items={HOMEPAGE_SLIDESHOW_ITEMS} rotationLength={5000} showArrows showMiniatures />
      <Container className={styles.content}>
        <h1>{t('home.title')}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dolor dolorum enim fugiat fugit
          laboriosam magnam mollitia, officiis saepe tenetur. Aliquam animi at beatae consequatur corporis dolores
          doloribus eligendi esse, et expedita minima, nostrum numquam omnis qui recusandae rem sunt, unde. Eveniet
          facere laudantium perferendis quod saepe. Accusamus architecto blanditiis corporis esse officia omnis
          provident quidem tenetur velit? Ad assumenda aut ea facilis libero magni perspiciatis, possimus, ratione rem
          saepe sequi sunt unde vel! A accusantium aliquam architecto, asperiores at, aut, cum delectus dolore eos esse
          et id in incidunt ipsam molestias neque nihil nulla officiis omnis praesentium quae voluptas voluptate
          voluptatem. At doloremque laborum maxime minima reprehenderit, similique ullam! Expedita ipsum minima numquam
          perspiciatis quae quasi qui quos saepe!
        </p>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid aspernatur at cupiditate deserunt
          distinctio dolor dolorum enim et explicabo fuga in iste magnam necessitatibus neque nihil non officiis omnis
          pariatur perferendis perspiciatis praesentium quis repellendus, unde vitae voluptatem voluptatibus! Atque aut,
          commodi, culpa dolorum eligendi itaque modi nostrum sed temporibus ullam vel veniam? Vitae?
        </p>
      </Container>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
};

export default memo(Home);
