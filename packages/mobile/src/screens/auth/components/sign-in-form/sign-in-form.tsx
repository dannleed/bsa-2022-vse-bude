import React, { FC } from 'react';
import {
  View,
  Input,
  PrimaryButton,
  ButtonText,
} from '~/components/components';
import { UserSignInDto } from '@vse-bude/shared';
import { useAppForm, useTranslation, useNavigation } from '~/hooks/hooks';
import { signIn } from '~/validation-schemas/validation-schemas';
import { globalStyles } from '~/styles/styles';
import { RootScreenName } from '~/common/enums/enums';
import { RootNavigationProps } from '~/common/types/types';
import { DEFAULT_SIGN_IN_PAYLOAD } from './common/constants';

type Props = {
  onSubmit: (payload: UserSignInDto) => void;
};

const SignInForm: FC<Props> = ({ onSubmit }) => {
  const { control, errors, handleSubmit } = useAppForm<UserSignInDto>({
    defaultValues: DEFAULT_SIGN_IN_PAYLOAD,
    validationSchema: signIn,
  });
  const { t } = useTranslation();
  const { navigate } = useNavigation<RootNavigationProps>();

  const navigateResetPassword = () => {
    navigate(RootScreenName.RESET_PASSWORD);
  };

  return (
    <View style={globalStyles.py5}>
      <Input
        label={t('verification.EMAIL')}
        placeholder={t('verification.EMAIL_HINT')}
        name="email"
        control={control}
        errors={errors}
      />
      <Input
        label={t('verification.PASSWORD')}
        placeholder={t('verification.PASSWORD_HINT')}
        name="password"
        control={control}
        errors={errors}
        contentContainerStyle={globalStyles.mt5}
        isSecure={true}
      />
      <View style={globalStyles.mt5}>
        <ButtonText alignSelf="flex-end" onPress={navigateResetPassword}>
          Forgot password
        </ButtonText>
      </View>
      <View style={globalStyles.mt5}>
        <PrimaryButton
          label={t('verification.SING_IN')}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
};

export { SignInForm };
