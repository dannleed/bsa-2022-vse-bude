import { useTypedSelector } from '@hooks';
import React, { useState } from 'react';
import { fetchAuctionProducts, fetchSellingProducts } from 'store/product';
import { CategorySection } from './category-section';
import { CharitySection } from './charity-section';
import { LotSection } from './lot-section';
import { PromoSection } from './promo-section';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const auctionProducts = useTypedSelector(
    (state) => state.product.auctionProducts,
  );
  const sellingProducts = useTypedSelector(
    (state) => state.product.sellingProducts,
  );

  return (
    <React.Fragment>
      <PromoSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CategorySection />
      <LotSection
        title="Popular Lots"
        lots={auctionProducts}
        loadMoreTitle="See All Lots"
        loadMoreAction={fetchAuctionProducts}
      />
      <CharitySection />
      <LotSection
        title="Popular Items"
        lots={sellingProducts}
        loadMoreTitle="See All Items"
        loadMoreAction={fetchSellingProducts}
      />
    </React.Fragment>
  );
};

export { Home };
