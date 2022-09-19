import { useTranslation } from 'next-i18next';
import {
  ItemImage,
  ItemHeader,
  Price,
  ItemStatus,
  ProfileLink,
  ItemDate,
} from '../primitives';
import { Charity } from '../tmp-element-charity';
import type { CardProps } from './types';
import * as styles from './styles';

export const Sold = ({ data }: CardProps) => {
  const { t } = useTranslation();
  const { title, imageLinks, price, winner, updatedAt } = data;
  const { id, avatar, firstName, lastName } = winner;

  return (
    <div css={styles.card}>
      <div css={styles.cardContent}>
        <div css={styles.leftContent}>
          <ItemImage src={imageLinks[0]} title={title} />
          <ItemDate size="lg" time={updatedAt} />
        </div>

        <div css={styles.rightContent}>
          <div css={styles.details}>
            <ItemHeader title={title} />
            <div css={styles.saleDetails}>
              <Price price={price} />
              <ItemStatus status={t('my-list:card.sold')} />
            </div>
            <ProfileLink
              userStatus={t('my-list:card.buyer')}
              id={id}
              avatar={avatar}
              firstName={firstName}
              lastName={lastName}
            />
          </div>
          <Charity />
        </div>
      </div>
    </div>
  );
};
