'use client';

import React from 'react';

import { User, X } from 'lucide-react';
import { useTranslations } from 'next-intl';

import SignInButton from '@/components/auth/signin-button';
import { GoogleIcon } from '@/components/icons';

export default function AuthModal() {
  const t = useTranslations('Layout');

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="auth-modal"
        data-hs-overlay="#auth-modal"
        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        aria-label={t('navbar.authModal.openButton.description')}
      >
        <User className="shrink-0 size-5" />
        {t('navbar.authModal.openButton.text')}
      </button>
      <div
        id="auth-modal"
        className="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 hidden size-full fixed top-0 start-0 z-[80] opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none"
        role="dialog"
        tabIndex={-1}
        aria-labelledby="auth-modal-label"
      >
        <div className="sm:max-w-lg sm:w-full m-3 sm:mx-auto">
          <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70 relative">
            <button
              type="button"
              className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600 absolute top-4 right-4"
              aria-label="Close"
              data-hs-overlay="#auth-modal"
            >
              <span className="sr-only">Close</span>
              <X className="shrink-0 size-4" />
            </button>
            <div className="p-4 overflow-y-auto">
              <h3 id="auth-modal-label" className="font-bold text-gray-800 dark:text-white">
                {t('navbar.authModal.title')}
              </h3>
              <p className="mt-1 text-gray-800 dark:text-neutral-400">{t('navbar.authModal.description')}</p>
              <div className="space-y-2 mt-4">
                <SignInButton value="google" icon={<GoogleIcon className="shrink-0 size-4" />} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
