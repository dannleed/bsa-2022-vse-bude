import { SearchInput } from 'components/primitives/input';
import { Container } from '@primitives';
import { promoMain, title, subTitle, greeting, search } from './styles';
import type { PromoProps } from './types';

const PromoSection = ({ searchQuery, setSearchQuery }: PromoProps) => (
  <section>
    <div css={promoMain}>
      <Container>
        <h1 css={title}>Charity auction to help Ukraine</h1>
        <div css={subTitle}>
          Buy and sell goods at auctions and help the Armed Forces of Ukraine.
          Funds for all goods will be redirected to the &quot;Povernysia
          Zhyvym&quot; fund
        </div>
      </Container>
      <div css={search}>
        <SearchInput
          value={searchQuery}
          setValue={setSearchQuery}
          placeholder="Search the products"
        />
      </div>
    </div>
    <div css={greeting}>Glory to Ukraine!</div>
  </section>
);
export { PromoSection };
