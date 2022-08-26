﻿import type { ItemDto } from '@vse-bude/shared';
import { Button } from '@primitives';
import { FavoriteButton } from 'components/product/favorite-button/component';
import { ItemTitle, ItemInfo, ItemPrice } from '../item-info';
import * as styles from './styles';

interface ItemInfoSellingProps {
  item: ItemDto;
  onBuy: () => void;
  onChangeIsFavorite: () => void;
}

export const ItemInfoSelling = ({
  item,
  onBuy,
  onChangeIsFavorite,
}: ItemInfoSellingProps) => (
  <div css={styles.wrapper}>
    <ItemTitle title={item.title} />
    <ItemPrice amount={item.price} currency="UAH" cssExtended={styles.price} />
    <ItemInfo item={item} />
    <div css={styles.controlls}>
      <Button onClick={onBuy}>Buy</Button>
      <FavoriteButton
        cssExtended={styles.favouriteButton}
        onChangeIsFavorite={onChangeIsFavorite}
        isFavorite={false}
        backgroundColor="transparent"
        size="md"
      ></FavoriteButton>
    </div>
  </div>
);
