import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { memo, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Form, FormGroup, FormControl, Button, FormLabel } from 'react-bootstrap';

import type { GetServerSideProps, NextPage } from 'next';

import { Layout } from '@app/components';
import { Person } from '@app/types';

const Weather: NextPage = () => {
  const { t } = useTranslation('common');
  const [formData, setFormData] = useState<Person | undefined>();

  const handleChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: any) => {
    // TODO validation schema from yupik and dispatch ActionType.UpdateData
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log(formData);
  };
  return (
    <Layout title={t('contact.title')}>
      <Container>
        <h1 className="text-center" style={{ margin: '56px 0' }}>
          {t('contact.title')}
        </h1>
        <Row>
          <Col lg={12}>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel>Name:</FormLabel>
                <FormControl name="name" onChange={handleChange} type="text" value={formData?.name} />
              </FormGroup>
              <FormGroup>
                <FormLabel>Surname:</FormLabel>
                <FormControl name="surname" onChange={handleChange} type="text" value={formData?.surname} />
              </FormGroup>
              <FormGroup>
                <FormLabel>Address:</FormLabel>
                <FormControl name="address" onChange={handleChange} type="text" value={formData?.address} />
              </FormGroup>
              <FormGroup>
                <FormLabel>Email:</FormLabel>
                <FormControl name="email" onChange={handleChange} type="email" value={formData?.email} />
              </FormGroup>
              <FormGroup>
                <FormLabel>Age:</FormLabel>
                <FormControl name="age" onChange={handleChange} type="number" value={formData?.age} />
              </FormGroup>
              <FormGroup>
                <FormLabel>Description:</FormLabel>
                <FormControl as="textarea" name="description" onChange={handleChange} value={formData?.description} />
              </FormGroup>
              <Button type="submit">Submit</Button>
            </Form>
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
