import classNames from 'classnames';
import React from 'react';

import styles from './index.module.scss';

interface Props {
  className?: string;
  style?: React.CSSProperties;
  isRequired?: boolean;
  htmlFor?: string;
  isHorizontal?: boolean;
  onClick?: () => void;
}

export const FieldLabel: React.FC<Props> = (props) => {
  const { htmlFor, className, style, children, isRequired, isHorizontal, onClick } = props;

  return (
    <label
      className={classNames('form-label', styles.label, isHorizontal ? styles.horizontal : null, className)}
      htmlFor={htmlFor}
      onClick={onClick}
      style={style}
    >
      {children}
      {isRequired && <span className="clr-red">*</span>}
    </label>
  );
};
