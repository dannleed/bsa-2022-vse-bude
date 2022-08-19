import type { FC } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { Layout } from '@components';
import { Container, Flex } from '@primitives';
import { DashboardLink } from '../primitives/dashboard-link';
import type { AccountPageProps } from './types';
import { linksData } from './account-links-data';
import * as styles from './styles';

export const AccountLayout: FC<AccountPageProps> = ({ children }) => {
  const router = useRouter();
  const { t } = useTranslation('user-account');

  return (
    <Layout>
      <Container>
        <div css={styles.wrapper}>
          <h3 css={styles.pageHeader}>{t('accountPage')}</h3>
          <Flex css={styles.pageContent}>
            <Flex css={styles.linksContainer}>
              {linksData.map((link, idx) => {
                const { iconPath, label, path } = link;
                const location = router.pathname === link.path;
                const tLabel = t(`dashboard.${label}`);

                return (
                  <DashboardLink
                    key={path + idx}
                    iconPath={iconPath}
                    label={tLabel}
                    location={location}
                    path={path}
                  />
                );
              })}
            </Flex>

            {children}
          </Flex>
        </div>
      </Container>
    </Layout>
  );
};
