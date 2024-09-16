import { LinkProps } from 'next/link';

import React, { HTMLProps } from 'react';

import clsx from 'clsx';

import { SpinnerIcon } from '@/components/icons';

import { Link } from '@/i18n/routing';

import s from './button.module.css';

type ButtonLink = boolean;

type ButtonProps<T extends ButtonLink> = {
  children?: React.ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  icon?: React.ReactElement;
  reversed?: boolean;
  size?: 'small' | 'default' | 'large';
  loading?: boolean;
  link?: T;
} & (T extends true ? LinkProps & HTMLProps<HTMLAnchorElement> : React.ButtonHTMLAttributes<HTMLButtonElement>);

// ? : conditional type not working
// TODO : fix conditional type
export default function Button<T extends ButtonLink>({ link, children, variant, icon, size, reversed, loading, ...props }: ButtonProps<T>) {
  const Component = link ? Link : 'button';

  return (
    <Component
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
    </Component>
  );
}
