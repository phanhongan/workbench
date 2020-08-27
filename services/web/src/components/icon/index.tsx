import React from 'react';

interface IIconPropsp {
  icon: string;
  fill?: string;
}

function Icon({ icon, fill = '#B0B6C1' }: IIconPropsp) {
  switch (icon) {
    case 'user':
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip_user)">
            <path
              d="M11.54 8.80005C10.5216 9.56827 9.28066 9.98383 8.005 9.98383C6.72934 9.98383 5.4884 9.56827 4.47 8.80005C3.14467 9.46676 2.02732 10.4838 1.23928 11.7408C0.45124 12.9978 0.022634 14.4466 0 15.93H16C15.9794 14.4474 15.5528 12.9988 14.7664 11.7418C13.9801 10.4847 12.8642 9.46724 11.54 8.80005Z"
              fill={fill}
            />
            <path
              d="M11.54 8.80005C10.5216 9.56827 9.28066 9.98383 8.005 9.98383C6.72934 9.98383 5.4884 9.56827 4.47 8.80005C3.14467 9.46676 2.02732 10.4838 1.23928 11.7408C0.45124 12.9978 0.022634 14.4466 0 15.93H16C15.9794 14.4474 15.5528 12.9988 14.7664 11.7418C13.9801 10.4847 12.8642 9.46724 11.54 8.80005Z"
              fill={fill}
            />
            <path
              d="M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z"
              fill={fill}
            />
            <path
              d="M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z"
              fill={fill}
            />
          </g>
          <defs>
            <clipPath id="clip_user">
              <rect width="16" height="15.93" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );

    case 'gear':
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip_gear)">
            <path
              d="M13.93 8C13.9299 7.63438 13.8965 7.26953 13.83 6.91L15.83 5.74L13.83 2.28L11.83 3.45C11.2689 2.97316 10.6249 2.60367 9.93 2.36V0H5.93V2.35C5.22456 2.59032 4.57006 2.95996 4 3.44L2 2.27L0 5.73L2 6.91C1.86197 7.63011 1.86197 8.36989 2 9.09L0 10.27L2 13.73L4 12.56C4.56108 13.0368 5.20515 13.4063 5.9 13.65V16H9.9V13.65C10.5949 13.4063 11.2389 13.0368 11.8 12.56L13.8 13.73L15.8 10.27L13.8 9.1C13.8772 8.73813 13.9207 8.36989 13.93 8ZM7.93 10C7.53444 10 7.14776 9.8827 6.81886 9.66294C6.48996 9.44318 6.23362 9.13082 6.08224 8.76537C5.93087 8.39991 5.89126 7.99778 5.96843 7.60982C6.0456 7.22186 6.23608 6.86549 6.51579 6.58579C6.79549 6.30608 7.15186 6.1156 7.53982 6.03843C7.92778 5.96126 8.32992 6.00087 8.69537 6.15224C9.06082 6.30362 9.37318 6.55996 9.59294 6.88886C9.8127 7.21776 9.93 7.60444 9.93 8C9.93 8.53043 9.71929 9.03914 9.34421 9.41421C8.96914 9.78929 8.46043 10 7.93 10Z"
              fill={fill}
            />
            <path
              d="M13.93 8C13.9299 7.63438 13.8965 7.26953 13.83 6.91L15.83 5.74L13.83 2.28L11.83 3.45C11.2689 2.97316 10.6249 2.60367 9.93 2.36V0H5.93V2.35C5.22456 2.59032 4.57006 2.95996 4 3.44L2 2.27L0 5.73L2 6.91C1.86197 7.63011 1.86197 8.36989 2 9.09L0 10.27L2 13.73L4 12.56C4.56108 13.0368 5.20515 13.4063 5.9 13.65V16H9.9V13.65C10.5949 13.4063 11.2389 13.0368 11.8 12.56L13.8 13.73L15.8 10.27L13.8 9.1C13.8772 8.73813 13.9207 8.36989 13.93 8ZM7.93 10C7.53444 10 7.14776 9.8827 6.81886 9.66294C6.48996 9.44318 6.23362 9.13082 6.08224 8.76537C5.93087 8.39991 5.89126 7.99778 5.96843 7.60982C6.0456 7.22186 6.23608 6.86549 6.51579 6.58579C6.79549 6.30608 7.15186 6.1156 7.53982 6.03843C7.92778 5.96126 8.32992 6.00087 8.69537 6.15224C9.06082 6.30362 9.37318 6.55996 9.59294 6.88886C9.8127 7.21776 9.93 7.60444 9.93 8C9.93 8.53043 9.71929 9.03914 9.34421 9.41421C8.96914 9.78929 8.46043 10 7.93 10Z"
              fill={fill}
            />
          </g>
          <defs>
            <clipPath id="clip_gear">
              <rect width="15.86" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );

    case 'logout':
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 7H4V5L8 8L4 11V9H0V7Z" fill={fill} />
          <path d="M0 7H4V5L8 8L4 11V9H0V7Z" fill={fill} />
          <path d="M0 16H16V0H0V5H2V2H10V14H2V11H0V16Z" fill={fill} />
          <path d="M0 16H16V0H0V5H2V2H10V14H2V11H0V16Z" fill={fill} />
          <path d="M0 7H4V5L8 8L4 11V9H0V7Z" fill={fill} />
          <path d="M0 7H4V5L8 8L4 11V9H0V7Z" fill={fill} />
          <path d="M0 16H16V0H0V5H2V2H10V14H2V11H0V16Z" fill={fill} />
          <path d="M0 16H16V0H0V5H2V2H10V14H2V11H0V16Z" fill={fill} />
        </svg>
      );

    default:
      return <span>Icon not found</span>;
  }
}

export default Icon;
