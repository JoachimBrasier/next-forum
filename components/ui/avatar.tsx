'use client';

import Image from 'next/image';

import React from 'react';
import { memo, useState } from 'react';

import clsx from 'clsx';
import { User } from 'lucide-react';

const sizes = {
  xs: {
    container: 'text-sm size-6',
    icon: 'h-4 w-4',
    image: {
      width: 24,
      height: 24,
    },
  },
  sm: {
    container: 'text-base size-8',
    icon: 'h-5 w-5',
    image: {
      width: 32,
      height: 32,
    },
  },
  md: {
    container: 'text-lg size-10',
    icon: 'h-6 w-6',
    image: {
      width: 40,
      height: 40,
    },
  },
  lg: {
    container: 'text-xl size-12',
    icon: 'h-8 w-8',
    image: {
      width: 48,
      height: 48,
    },
  },
  xl: {
    container: 'text-2xl size-16',
    icon: 'h-10 w-10',
    image: {
      width: 64,
      height: 64,
    },
  },
};

type Props = {
  image?: string | null | undefined;
  fallbackText?: string | null | undefined;
  fallbackMode?: 'placeholder' | 'text';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
};

export default memo(function Avatar({ image, fallbackText, fallbackMode, size, className }: Props) {
  const [usePlaceholder, setUsePlaceholder] = useState(!!image);
  const [useFallback, setUseFallback] = useState(false);
  const definedSize = sizes[size || 'md'];

  return (
    <div
      className={clsx(
        'flex items-center justify-center font-semibold leading-non bg-gray-100 rounded-full overflow-hidden text-gray-800  dark:bg-neutral-700 dark:text-white',
        definedSize.container,
        className,
        { ['animate-pulse']: usePlaceholder },
      )}
    >
      {!image || useFallback ? (
        <>
          {fallbackMode === 'text' && !!fallbackText ? (
            fallbackText.charAt(0).toUpperCase()
          ) : (
            <User className={clsx('size-full fill-gray-400 text-gray-400 dark:text-neutral-500 dark:fill-neutral-500', definedSize.icon)} />
          )}
        </>
      ) : (
        <Image
          alt=""
          src={image}
          width={definedSize.image.width}
          height={definedSize.image.height}
          onError={() => {
            setUseFallback(true);
            setUsePlaceholder(false);
          }}
          onLoad={() => {
            setUsePlaceholder(false);
          }}
        />
      )}
    </div>
  );
});
