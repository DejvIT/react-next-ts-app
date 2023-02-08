import classNames from 'classnames';
import React from 'react';

import styles from './index.module.scss';

interface Props {
  className?: string;
  style?: React.CSSProperties;
  text: string;
}

export const FieldError: React.FC<Props> = (props) => {
  const { text, className, style } = props;

  return (
    <span className={classNames(styles.error, className)} style={style}>
      {text}
    </span>
  );
};
