import React, { FC } from 'react';

// type
import type IconsProps from '../../types/Icons';

const index: FC<IconsProps> = (props) => {
  const { color = 'currentColor', size = '24', ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
};

export default index;
