import clsx from 'clsx';

import s from './footer.module.css';

export default async function Footer() {
  return (
    <footer className={s.root}>
      <div className={clsx('maxScreenSize', s.container)}></div>
    </footer>
  );
}
