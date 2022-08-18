import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const lotContainer = ({ spaces }: Theme) => css`
  margin-top: ${spaces.xl2};
  display: grid;
  grid-template-columns: repeat(auto-fill, 360px);
  gap: ${spaces.xl};
`;
