'use client';

import { useState } from 'react';

import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { UserIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useTranslations } from 'next-intl';

import { SignInButton } from '@/components/auth';
import { GoogleIcon } from '@/components/icons';

import s from './modal.module.css';

export default function AuthModal() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('Layout');

  return (
    <>
      <button
        aria-label={t('navbar.authModal.openButton.description')}
        onClick={() => setIsOpen(true)}
        className={s.openButton}
      >
        <UserIcon className={s.buttonIcon} />
        {t('navbar.authModal.openButton.text')}
      </button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className={s.root}>
        <DialogBackdrop className={s.backdrop} />
        <div className={s.container}>
          <DialogPanel className={s.panel}>
            <div className={s.header}>
              <DialogTitle className={s.title}>{t('navbar.authModal.title')}</DialogTitle>
              <button
                aria-label={t('navbar.authModal.closeButton.description')}
                onClick={() => setIsOpen(false)}
                className={s.closeButton}
              >
                <XMarkIcon className={s.closeIcon} />
              </button>
            </div>
            <Description className={s.description}>{t('navbar.authModal.description')}</Description>
            <div className={s.authButtons}>
              <SignInButton value="google" icon={<GoogleIcon className={s.authButtonIcon} />} />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
