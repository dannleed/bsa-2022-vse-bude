import { StyleSheet } from 'react-native';
import { ButtonType, ButtonAppearance } from '~/common/enums/enums';
import { ColorPalette } from '@vse-bude/shared';

const styles = StyleSheet.create({
  [ButtonType.PRIMARY]: {
    paddingVertical: 13,
    paddingHorizontal: 35,
  },
  [ButtonType.SECONDARY]: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
  [ButtonAppearance.OUTLINED]: {
    borderWidth: 2,
    backgroundColor: ColorPalette.WHITE_100,
    borderColor: ColorPalette.YELLOW_100,
  },
  [ButtonAppearance.FILLED]: {
    backgroundColor: ColorPalette.YELLOW_100,
  },
  disabledFill: {
    backgroundColor: ColorPalette.GRAY_200,
    borderColor: ColorPalette.GRAY_200,
  },
  disabledOutlained: {
    backgroundColor: ColorPalette.WHITE_100,
    borderColor: ColorPalette.GRAY_200,
    borderWidth: 2,
  },
  button: {
    padding: 13,
    alignItems: 'center',
    borderRadius: 10,
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19,
  },
  outlainedTitle: {
    color: ColorPalette.YELLOW_100,
  },
  filledTitle: {
    color: ColorPalette.WHITE_100,
  },
  disabledOutlainedTitle: {
    color: ColorPalette.GRAY_200,
  },
});

export { styles };
