import classNames from 'classnames';
import React, { memo } from 'react';

import { ChevronRightIcon } from '@app/components';

import styles from './index.module.scss';

interface Props {
  id?: string;
  isLoading?: boolean;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'icon' | 'default' | 'dark' | 'bordered' | 'link-secondary';
  size?: 'normal' | 'small' | 'large';
  tabIndex?: number;
  type?: 'button' | 'submit';
  block?: boolean;
  withChevronRight?: boolean;
  hideChildrenWhileLoading?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onTouchStart?: () => void;
  colorHexChevron?: string;
}

export const Button: React.FunctionComponent<Props> = (props) => {
  const {
    id,
    ariaLabel,
    disabled,
    variant = 'default',
    size = 'normal',
    tabIndex,
    style,
    className,
    isLoading,
    hideChildrenWhileLoading,
    type = 'button',
    block,
    withChevronRight,
    children,
    onClick,
    onMouseEnter,
    onTouchStart,
    colorHexChevron,
  } = props;

  const getVariantClassName = () => {
    switch (variant) {
      case 'primary':
        return styles.primary;
      case 'secondary':
        return styles.secondary;
      case 'tertiary':
        return styles.tertiary;
      case 'icon':
        return styles.icon;
      case 'dark':
        return styles.dark;
      case 'bordered':
        return styles.bordered;
      case 'link-secondary':
        return styles.linkSecondary;

      default:
        return styles.link;
    }
  };

  const getSizeClassName = () => {
    switch (size) {
      case 'small':
        return styles.sizeSmall;
      case 'large':
        return styles.sizeLarge;
      default:
        return styles.sizeNormal;
    }
  };

  return (
    <button
      aria-label={ariaLabel}
      className={classNames(
        className,
        styles.btn,
        block ? styles.block : null,
        withChevronRight ? styles.withChevron : null,
        getVariantClassName(),
        getSizeClassName(),
        disabled ? styles.disabled : null,
      )}
      disabled={disabled || isLoading}
      id={id}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onTouchStart={onTouchStart}
      role="button"
      style={style}
      tabIndex={tabIndex}
      type={type}
    >
      {isLoading && (
        <LoadingIcon
          colorHex={
            variant === 'secondary'
              ? 'var(--clrDarkSecondary)'
              : variant === 'primary'
              ? 'var(--clrDisabledText)'
              : undefined
          }
        />
      )}

      {!hideChildrenWhileLoading && !isLoading && (
        <>
          {children}

          {withChevronRight && <ChevronRightIcon className={styles.chevron} colorHex={colorHexChevron} />}
        </>
      )}
    </button>
  );
};

interface LoadingIconProps {
  colorHex?: string;
}

const LoadingIcon: React.FC<LoadingIconProps> = (props) => {
  const { colorHex = '#fff' } = props;

  return (
    <svg
      className={classNames('loadingIcon', styles.loadingIcon)}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 12C19 13.4555 18.5463 14.8748 17.702 16.0604C16.8577 17.2461 15.6648 18.139 14.2894 18.615C12.9139
        19.0911 11.4242 19.1265 10.0277 18.7164C8.63115 18.3063 7.39717 17.4711 6.49747 16.3269C5.59777 15.1828
        5.0771 13.7866 5.00791 12.3328C4.93872 10.8789 5.32445 9.43961 6.11143 8.2152C6.89841 6.99078 8.04749 6.04214
        9.39877 5.50126C10.7501 4.96039 12.2363 4.85419 13.6508 5.19744"
        stroke={colorHex}
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
};

export default memo(Button);
