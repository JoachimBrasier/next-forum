import { memo } from 'react';

import s from './tag.module.css';

export default memo(function Tag({ children }: { children: React.ReactNode }) {
  return <span className={s.root}>{children}</span>;
});
