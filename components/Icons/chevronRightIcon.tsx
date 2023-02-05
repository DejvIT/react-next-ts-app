import React from 'react';

interface Props {
  className?: string;
  style?: React.CSSProperties;
  colorHex?: string;
  size?: 'default' | 'sm';
}

export const ChevronRightIcon: React.FC<Props> = (props) => {
  const { className, style, colorHex = '#fff', size = 'default' } = props;
  if (size === 'sm') {
    return (
      <svg
        className={className}
        fill="none"
        height="16"
        style={style}
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M5.79289 12.7071C5.40237 12.3166 5.40237 11.6834 5.79289 11.2929L9.08579 8L5.79289 4.70711C5.40237 4.31658
          5.40237 3.68342 5.79289 3.29289C6.18342 2.90237 6.81658 2.90237 7.20711 3.29289L11.2071 7.29289C11.5976
          7.68342 11.5976 8.31658 11.2071 8.70711L7.20711 12.7071C6.81658 13.0976 6.18342 13.0976 5.79289 12.7071Z"
          fill={colorHex}
          fillRule="evenodd"
        />
      </svg>
    );
  }
  return (
    <svg
      className={className}
      fill="none"
      height="24"
      style={style}
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M9.29289 16.7071C8.90237 16.3166 8.90237 15.6834 9.29289 15.2929L12.5858 12L9.29289 8.70711C8.90237 8.31658
        8.90237 7.68342 9.29289 7.29289C9.68342 6.90237 10.3166 6.90237 10.7071 7.29289L14.7071 11.2929C15.0976 11.6834
        15.0976 12.3166 14.7071 12.7071L10.7071 16.7071C10.3166 17.0976 9.68342 17.0976 9.29289 16.7071Z"
        fill={colorHex}
        fillRule="evenodd"
      />
    </svg>
  );
};
