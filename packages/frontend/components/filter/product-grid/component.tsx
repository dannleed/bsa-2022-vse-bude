import { SplideSlide } from '@splidejs/react-splide';
import { ProductCard } from 'components/product/card/component';
import * as styles from './styles';
import type { ProductGridProps } from './types';

export const ProductGrid = ({ lots }: ProductGridProps) => (
  <div css={styles.productGridWrapper}>
    <div css={styles.productGrid}>
      {lots.map((item) => (
        <SplideSlide key={item.id}>
          <ProductCard
            data={item}
            name={item.title}
            description={item.description}
            price={item.price}
            images={item.imageLinks}
            currency="UAH"
            auctionDate={item.endDate}
          />
        </SplideSlide>
      ))}
    </div>
  </div>
);
