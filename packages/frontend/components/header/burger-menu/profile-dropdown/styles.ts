import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const wrapper = css`
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
`;

export const option = ({ fontSizes, lineHeights }: Theme) => css`
  font-size: ${fontSizes.body2};
  line-height: ${lineHeights.body2};
`;
