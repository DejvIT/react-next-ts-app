import { Form, Formik, FormikErrors, FormikHelpers, FormikProps, FormikTouched } from 'formik';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { memo, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import type { GetServerSideProps, NextPage } from 'next';

import { Button, Layout, NumberField, TextField } from '@app/components';
import { ActionType, useAppState } from '@app/contexts';
import { nameof } from '@app/helpers';
import { personValidationSchema } from '@app/sdk/validations';
import { Person, RouteType } from '@app/types';

const Weather: NextPage = () => {
  const { t } = useTranslation('common');
  const { appState, dispatch } = useAppState();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const formikRef = useRef<FormikProps<Person>>(null);

  const labelCol = 4;
  const controlCol = 7;

  const onFormikSubmit = async (values: Person, { validateForm }: FormikHelpers<Person>) => {
    await handleSubmit(values, validateForm as (values?: Person) => Promise<FormikErrors<Person>>);
  };

  const handleSubmit = async (
    values: Person,
    validateForm: (values?: Person) => Promise<FormikErrors<Person>>,
    nextRoute?: string,
  ) => {
    try {
      // User is allowed to continue, but step is not marked as completed.
      const validation = await validateForm(values);
      const isFormValid = !Object.keys(validation)?.length;

      setIsLoading(true);

      dispatch({
        type: ActionType.UpdateData,
        payload: {
          formData: {
            data: {
              ...appState.formData?.data,
              ...values,
            },
          },
        },
      });

      if (nextRoute) {
        await router.push(nextRoute);
      }
      setIsLoading(false);
      return isFormValid;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('contact.handleSubmit() error:', e);
      setIsLoading(false);
      return false;
    }
  };

  return (
    <Layout title={t('contact.title')}>
      <Container>
        <h1 className="text-center" style={{ margin: '56px 0' }}>
          {t('contact.title')}
        </h1>
        <Row>
          <Col lg={12}>
            <Formik
              enableReinitialize
              initialValues={
                {
                  name: appState.formData?.data?.name,
                  surname: appState.formData?.data?.surname,
                  age: appState.formData?.data?.age,
                  email: appState.formData?.data?.email,
                  address: appState.formData?.data?.address,
                  description: appState.formData?.data?.description,
                } as Person
              }
              innerRef={formikRef}
              onSubmit={onFormikSubmit}
              validationSchema={personValidationSchema}
            >
              {({ values, setFieldValue, touched, errors, submitCount, isSubmitting, validateForm }) => {
                const didSubmit = submitCount > 0;
                const personErrors = errors as FormikErrors<Person>;
                const personTouched = touched as FormikTouched<Person>;

                return (
                  <Form>
                    <TextField
                      controlCol={controlCol}
                      error={personErrors.name}
                      isHorizontal
                      isRequired
                      label={t('firstNameLabel')}
                      labelCol={labelCol}
                      name="name"
                      onChange={(v) => setFieldValue(`${nameof<Person>('name')}`, v)}
                      showError={personTouched.name || didSubmit}
                      value={values.name}
                    />

                    <TextField
                      controlCol={controlCol}
                      error={personErrors.surname}
                      isHorizontal
                      isRequired
                      label={t('lastNameLabel')}
                      labelCol={labelCol}
                      name="surname"
                      onChange={(v) => setFieldValue(`${nameof<Person>('surname')}`, v)}
                      showError={personTouched.surname || didSubmit}
                      value={values.surname}
                    />

                    <Col lg={controlCol}>
                      <NumberField
                        error={personErrors.age}
                        isRequired
                        label={t('ageLabel')}
                        max={99}
                        min={18}
                        name="age"
                        onChange={(v) => setFieldValue(`${nameof<Person>('age')}`, v)}
                        precision={0}
                        showError={personTouched.age || didSubmit}
                        value={values.age}
                      />
                    </Col>

                    <Button
                      isLoading={isSubmitting || isLoading}
                      onClick={async () => await handleSubmit(values, validateForm, RouteType.Home())}
                      variant="primary"
                      withChevronRight
                    >
                      {t('store')}
                    </Button>
                  </Form>
                );
              }}
            </Formik>
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
