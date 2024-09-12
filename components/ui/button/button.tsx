import React from 'react';

import clsx from 'clsx';

import { SpinnerIcon } from '@/components/icons';

import s from './button.module.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  icon?: React.ReactElement;
  reversed?: boolean;
  size?: 'small' | 'default' | 'large';
  loading?: boolean;
}

export default function Button({ children, variant, icon, size, reversed, loading, ...props }: Props) {
  return (
    <button
      {...props}
      className={clsx(
        s.root,
        {
          [s.primary]: variant === 'primary',
          [s.success]: variant === 'success',
          [s.warning]: variant === 'warning',
          [s.danger]: variant === 'danger',
          [s.small]: size === 'small',
          [s.large]: size === 'large',
          [s.square]: !children,
          [s.reversed]: reversed,
        },
        props?.className,
      )}
    >
      {loading ? <SpinnerIcon className={s.loadingIcon} /> : icon}
      {children}
    </button>
  );
}
