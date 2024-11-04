'use client';

import React, { useTransition } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const LangSwitcher: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();


  const changeLocale = async (locale: any) => {
    let pathParts = '';

    if (pathname) {
      pathParts = pathname.slice(3);
    }

    startTransition(() => {
      router.replace(`/${locale}${pathParts}`, { scroll: false });
    });

  };

  return (
    <div>
      <button onClick={() => changeLocale('en')}>English</button>
      <button onClick={() => changeLocale('ru')}>Russian</button>
    </div>
  );
};

export default LangSwitcher;
