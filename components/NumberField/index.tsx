import classNames from 'classnames';
import InputNumber from 'rc-input-number';
import React, { useRef, memo } from 'react';
import { Col, FormGroup, Row } from 'react-bootstrap';

import { FieldError, FieldLabel } from '@app/components';

import styles from './index.module.scss';

interface Props {
  value?: number | null;
  onChange?: (value: number) => void;
  onBlur?: () => void;
  className?: string;
  style?: React.CSSProperties;
  name: string;
  label?: string | JSX.Element;
  placeholder?: string;
  suffix?: string | JSX.Element;

  isRequired?: boolean;
  touched?: boolean;
  error?: string;
  showError?: boolean;

  autocomplete?: string;
  isHorizontal?: boolean;

  disabled?: boolean;

  min?: number;
  max?: number;
  precision?: number;
  decimalSeparator?: string;
}

const FORM_CONTROL_COL = 4;
const FORM_LABEL_COL = 8;

export const NumberField: React.FC<Props> = (props) => {
  const {
    value,
    onChange,
    onBlur,
    suffix,
    label,
    name,
    className,
    style,
    error,
    showError,
    placeholder,
    autocomplete,
    isRequired,
    isHorizontal,
    disabled,
    min,
    max,
    precision,
    decimalSeparator = ',',
  } = props;
  const addonRef = useRef<HTMLSpanElement>(null);
  const addonName = `${name}Addon`;

  return (
    <FormGroup as={Row} className={classNames(styles.formGroup, showError && error ? styles.withError : null)}>
      {label && (
        <Col md={isHorizontal ? FORM_LABEL_COL : 12}>
          <FieldLabel htmlFor={name} isHorizontal={isHorizontal} isRequired={isRequired}>
            {label}
          </FieldLabel>
        </Col>
      )}
      <Col lg={isHorizontal ? FORM_CONTROL_COL : 12}>
        <div className={classNames(styles.inputGroup, suffix ? styles.withAddon : undefined, className)} style={style}>
          <InputNumber
            aria-describedby={suffix ? addonName : undefined}
            aria-label={placeholder}
            autoComplete={autocomplete}
            className={styles.inputNumber}
            decimalSeparator={decimalSeparator}
            disabled={disabled}
            id={name}
            inputMode="tel"
            max={max}
            min={min}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            placeholder={placeholder}
            precision={precision}
            value={value || undefined}
          />

          {suffix && (
            <span className={styles.addon} id={addonName} ref={addonRef}>
              {suffix}
            </span>
          )}
        </div>

        {showError && error ? <FieldError text={error} /> : null}
      </Col>
    </FormGroup>
  );
};

export default memo(NumberField);
