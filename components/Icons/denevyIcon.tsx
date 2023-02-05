import React from 'react';

interface Props {
  className?: string;
  style?: React.CSSProperties;
  colorHex?: string;
}

export const DenevyIcon: React.FC<Props> = (props) => {
  const { className, style, colorHex = '#fff' } = props;

  return (
    <svg
      className={className}
      height="50.000000pt"
      preserveAspectRatio="xMidYMid meet"
      style={style}
      version="1.0"
      viewBox="0 0 300.000000 108.000000"
      width="100.000000pt"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={colorHex} stroke="none" transform="translate(0.000000,108.000000) scale(0.100000,-0.100000)">
        <path
          d="M70 630 l0 -150 111 0 c98 0 110 -2 99 -15 -10 -13 -9 -15 11 -14 14
0 34 12 47 30 l24 29 -24 29 c-14 18 -33 30 -47 30 -20 1 -22 -2 -13 -11 7 -7
12 -14 12 -17 0 -4 -36 -6 -80 -7 l-80 0 0 93 0 93 105 0 105 0 0 -25 c0 -21
5 -25 28 -25 26 0 27 2 28 55 l2 55 -164 0 -164 0 0 -150z"
        />
        <path
          d="M550 563 l0 -215 118 4 c101 3 123 7 162 28 132 73 144 270 21 354
-46 32 -64 35 -193 40 l-108 4 0 -215z m248 133 c53 -27 74 -70 70 -143 -6
-101 -61 -143 -188 -143 l-70 0 0 156 0 157 78 -5 c45 -3 91 -12 110 -22z"
        />
        <path
          d="M1030 776 c0 0 -1 -97 -3 -214 l-2 -212 133 0 132 0 0 31 0 31 -102
-3 -103 -3 -3 67 -3 67 98 0 c98 0 98 0 98 25 0 25 0 25 -97 25 l-98 0 0 65 0
65 100 0 100 0 0 30 0 30 -125 -1 c-69 -1 -125 -2 -125 -3z"
        />
        <path
          d="M1380 565 l0 -215 30 0 30 0 0 168 c1 150 2 165 15 147 9 -11 70 -86
138 -167 102 -124 126 -148 150 -148 l27 0 0 215 0 215 -30 0 -30 0 -2 -166
-3 -166 -139 166 c-107 128 -144 166 -163 166 l-23 0 0 -215z"
        />
        <path
          d="M1880 777 c0 -1 -1 -98 -3 -215 l-2 -212 133 0 132 0 0 31 0 31 -102
-3 -102 -3 -1 67 -2 67 96 0 c96 0 96 0 96 25 0 25 0 25 -96 25 l-95 0 0 65 0
65 98 0 98 0 0 30 0 30 -125 -1 c-69 0 -125 -1 -125 -2z"
        />
        <path
          d="M2173 768 c3 -7 44 -100 91 -206 47 -106 86 -197 86 -202 0 -6 6 -10
13 -10 6 0 52 93 101 205 49 113 92 205 95 205 3 -1 39 -43 79 -96 l72 -94 0
-110 0 -110 33 0 32 0 -3 103 -4 103 86 107 c47 59 86 110 86 112 0 3 -15 5
-33 5 -30 0 -40 -8 -97 -85 -36 -46 -67 -81 -70 -77 -3 4 -32 42 -64 85 l-59
78 -59 -3 -58 -3 -51 -115 c-28 -63 -55 -128 -61 -145 -6 -16 -14 -33 -17 -37
-3 -4 -35 61 -71 145 -65 150 -66 152 -99 155 -25 3 -32 0 -28 -10z"
        />
        <path
          d="M186 661 l-29 -30 24 -30 c15 -18 34 -30 49 -30 19 -1 21 2 12 11 -7
7 -12 14 -12 17 0 4 36 6 80 6 l80 0 0 -99 c0 -85 -2 -97 -16 -92 -9 3 -56 6
-105 6 -82 0 -89 1 -89 20 0 15 -7 20 -25 20 -21 0 -25 -5 -25 -27 0 -16 -3
-38 -6 -50 l-6 -23 166 0 166 0 0 148 0 148 -110 -1 c-61 0 -110 2 -110 6 0 3
5 10 12 17 9 9 8 12 -8 12 -11 0 -33 -13 -48 -29z"
        />
      </g>
    </svg>
  );
};
