import classNames from 'classnames';
import React, { useRef, memo } from 'react';
import { FormGroup, Row, Col } from 'react-bootstrap';

import { FieldLabel, FieldError } from '@app/components';

import styles from './index.module.scss';

interface Props {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  name: string;
  label?: string;
  placeholder?: string;
  suffix?: string | JSX.Element;
  isHorizontal?: boolean;
  isTextArea?: boolean;
  isRequired?: boolean;
  disabled?: boolean;
  showError?: boolean;
  error?: string;
  touched?: boolean;
  labelCol?: number;
  controlCol?: number;
  value?: string | null;
  inputMode?: 'text' | 'none' | 'search' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal';
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
}

const FORM_CONTROL_COL = 4;
const FORM_LABEL_COL = 8;

export const TextField: React.FC<Props> = (props) => {
  const {
    id,
    labelCol = FORM_LABEL_COL,
    controlCol = FORM_CONTROL_COL,
    value = undefined,
    disabled,
    name,
    isTextArea,
    label,
    placeholder,
    suffix,
    isHorizontal,
    className,
    style,
    showError,
    error,
    isRequired,
    inputMode = 'text',
    onChange,
    onBlur,
  } = props;
  const [addonWidth, setAddonWidth] = React.useState<number>();
  const addonRef = useRef<HTMLSpanElement>(null);
  const addonName = `${name}Addon`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(e?.target?.value);
    }
  };

  //#region Effects

  React.useEffect(() => {
    if (suffix && addonRef?.current) {
      setAddonWidth(addonRef.current?.getBoundingClientRect()?.width);
    }
  }, [suffix]);

  //#endregion

  return (
    <FormGroup as={Row} className={classNames(styles.formGroup, error && showError ? styles.withError : null)}>
      {label && (
        <Col lg={isHorizontal ? labelCol : 12}>
          <FieldLabel htmlFor={name} isHorizontal={isHorizontal} isRequired={isRequired}>
            {label}
          </FieldLabel>
        </Col>
      )}
      <Col lg={isHorizontal ? controlCol : 12}>
        <div className={classNames(styles.inputGroup, suffix ? styles.withAddon : undefined, className)} style={style}>
          {isTextArea ? (
            <textarea
              aria-describedby={suffix ? addonName : undefined}
              aria-label={placeholder}
              data-suffixwidth={suffix ? addonWidth : undefined}
              disabled={disabled}
              id={id || name}
              name={name}
              onBlur={() => {
                if (onChange) {
                  onChange((value as string)?.trim());
                }
                if (onBlur) {
                  onBlur(value as string);
                }
              }}
              onChange={handleChange}
              placeholder={placeholder}
              rows={4}
              style={{
                paddingRight: suffix ? addonWidth : undefined,
                backgroundPositionX:
                  suffix && addonWidth && showError ? `calc(100% - ${addonWidth}px - 12px` : undefined,
              }}
              value={(value as string) || ''}
            />
          ) : (
            <input
              aria-describedby={suffix ? addonName : undefined}
              aria-label={placeholder}
              data-suffixwidth={suffix ? addonWidth : undefined}
              disabled={disabled}
              id={id || name}
              inputMode={inputMode}
              name={name}
              onBlur={() => {
                if (onChange) {
                  onChange((value as string)?.trim());
                }
                if (onBlur) {
                  onBlur(value as string);
                }
              }}
              onChange={handleChange}
              placeholder={placeholder}
              style={{
                paddingRight: suffix ? addonWidth : undefined,
                backgroundPositionX:
                  suffix && addonWidth && showError ? `calc(100% - ${addonWidth}px - 12px` : undefined,
              }}
              value={(value as string) || ''}
            />
          )}

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

export default memo(TextField);
