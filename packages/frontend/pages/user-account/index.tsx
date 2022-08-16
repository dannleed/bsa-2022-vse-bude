import type React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { wrapper } from 'store';
import { AccountLayout } from '@components';

export const getServerSideProps = wrapper.getServerSideProps(
  () => async (ctx) => {
    const { locale } = ctx;

    return Promise.resolve({
      props: {
        ...(await serverSideTranslations(locale, [
          'dashboard',
          'personal-info',
          'page-titles',
        ])),
      },
    });
  },
);

const UserAccount = ({ children }: { children: React.ReactNode }) => (
  <AccountLayout>{children}</AccountLayout>
);

export default UserAccount;
