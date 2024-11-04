import LangSwitcher from '@/components/LangSwitcher';
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div>
      <LangSwitcher/>
      <h1>{t('title')}</h1>
    </div>
  );
}