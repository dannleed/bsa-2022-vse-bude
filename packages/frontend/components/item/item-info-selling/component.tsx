﻿import type { ProductDto } from '@vse-bude/shared';
<<<<<<< HEAD
import { Button, Tooltip } from '@primitives';
=======
import { ProductStatus } from '@vse-bude/shared';
import { Button, Icon, Loader } from '@primitives';
>>>>>>> main
import { FavoriteButton } from 'components/product/favorite-button/component';
import { useTranslation } from 'next-i18next';
import { useTypedSelector } from '@hooks';
import { useRouter } from 'next/router';
import { IconColor, IconName } from '@enums';
import { ItemTitle, ItemInfo, ItemPrice } from '../item-info';
import * as styles from './styles';
import { IconColor } from '@enums';

interface ItemInfoSellingProps {
  item: ProductDto;
  isInFavorite: boolean;
  onBuy: () => void;
  onChangeIsFavorite: () => void;
}

export const ItemInfoSelling = ({
  item,
  isInFavorite,
  onBuy,
  onChangeIsFavorite,
}: ItemInfoSellingProps) => {
  const { t } = useTranslation();
  const { push } = useRouter();
  const { user } = useTypedSelector((state) => state.auth);
  const { loading } = useTypedSelector((state) => state.product);
  const isAuthor = user?.id === item.author.id;
  const isSold = item.status === ProductStatus.SOLD;

  return (
    <div css={styles.wrapper}>
      <ItemTitle title={item.title} views={item.views} />
      <ItemPrice
        amount={item.price}
        currency={t('public:uah')}
        cssExtended={styles.price}
      />
      <ItemInfo item={item} />
      <div css={styles.controls}>
        {isAuthor ? (
          <Button onClick={() => push(`/items/edit/${item.id}`)}>
            {t('item:buttons.editBtn')}
          </Button>
        ) : isSold ? (
          <div css={styles.sold}>
            <Icon icon={IconName.INFO} color={IconColor.YELLOW} size={'xs'} />
            {t('item:soldCaption')}
          </div>
        ) : (
          <>
<<<<<<< HEAD
            <Button onClick={onBuy}>{t('item:buttons.buyBtn')}</Button>
            <Tooltip
              trigger={
                <FavoriteButton
                  cssExtended={styles.favouriteButton}
                  onChangeIsFavorite={onChangeIsFavorite}
                  isFavorite={isInFavorite}
                  backgroundColor="transparent"
                  inFavouriteColor={IconColor.YELLOW}
                  notInFavouriteColor={IconColor.YELLOW}
                  size="md"
                  disabled={!user}
                />
              }
            >
              {user
                ? isInFavorite
                  ? t('item:buttons.tooltips.favBtnRemove')
                  : t('item:buttons.tooltips.favBtn')
                : t('item:buttons.tooltips.notAuthorized.favBtn')}
            </Tooltip>
=======
            <FavoriteButton
              cssExtended={styles.favouriteButton}
              onChangeIsFavorite={onChangeIsFavorite}
              isFavorite={isInFavorite}
              backgroundColor="transparent"
              size="md"
              disabled={!user}
            />
            <Button
              onClick={onBuy}
              disabled={!user || !user.phoneVerified || loading}
              tooltip={
                user
                  ? user.phoneVerified
                    ? t('item:buttons.buyBtn')
                    : t('item:buttons.tooltips.notVerified.buyBtn')
                  : t('item:buttons.tooltips.notAuthorized.buyBtn')
              }
            >
              {loading ? (
                <Loader size="extraSmall" />
              ) : (
                t('item:buttons.buyBtn')
              )}
            </Button>
>>>>>>> main
          </>
        )}
      </div>
    </div>
  );
};
