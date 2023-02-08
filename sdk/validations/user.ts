import * as yup from 'yup';
import { Person } from '@app/types';
import {
  FORM_ERR_FIELD_NAME,
  FORM_FIELD_NAME_REGEX,
  FORM_ERR_FIELD_REQUIRED,
  FORM_ERR_FIELD_EMAIL,
  FORM_ERR_FIELD_EMAIL_MAX,
} from '@app/constants';

export const nameSurnameValidationSchema: yup.SchemaOf<Pick<Person, 'name' | 'surname'>> = yup.object({
  name: yup.string().nullable().matches(FORM_FIELD_NAME_REGEX, FORM_ERR_FIELD_NAME).required(FORM_ERR_FIELD_REQUIRED),
  surname: yup
    .string()
    .nullable()
    .matches(FORM_FIELD_NAME_REGEX, FORM_ERR_FIELD_NAME)
    .required(FORM_ERR_FIELD_REQUIRED),
});

export const personValidationSchema: yup.SchemaOf<Person> = yup
  .object({
    name: yup.string().nullable().matches(FORM_FIELD_NAME_REGEX, FORM_ERR_FIELD_NAME).required(FORM_ERR_FIELD_REQUIRED),
    surname: yup
      .string()
      .nullable()
      .matches(FORM_FIELD_NAME_REGEX, FORM_ERR_FIELD_NAME)
      .required(FORM_ERR_FIELD_REQUIRED),
    email: yup
      .string()
      .email(FORM_ERR_FIELD_EMAIL)
      .nullable()
      .max(100, FORM_ERR_FIELD_EMAIL_MAX)
      .required(FORM_ERR_FIELD_REQUIRED),
    address: yup.string().nullable().required(FORM_ERR_FIELD_REQUIRED),
    age: yup.number().default(18).required(FORM_ERR_FIELD_REQUIRED),
    description: yup.string().optional(),
  })
  .optional();
