import { Button } from '@primitives';
import { useTranslation } from 'next-i18next';
import { useAppDispatch, useTypedSelector } from '@hooks';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import type { PhoneVerifyDto } from '@vse-bude/shared';
import { joiResolver } from '@hookform/resolvers/joi';
import { Input, Error } from '@primitives';
import { inputWrapper } from '../layout/styles';
import { verifyEntity, verifyForm, verifyInput, verifyText } from '../styles';
import { hideMainTextPart } from '../../../helpers/text';
import { phoneCodeResend, phoneVerification } from '../../../store/auth';
import { getErrorKey } from '../../../helpers/validation';
import { RESEND_VERIFICATION_CODE_LIMIT_SEC } from '../../../common/constants/app';
import { verifyCodeSchema } from './validation';
import { divider } from './styles';
import { ResendCodeButton } from './resend-code';

export const PhoneVerification = () => {
  const { user } = useTypedSelector((state) => state.profile);
  const { error } = useTypedSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PhoneVerifyDto>({
    resolver: joiResolver(verifyCodeSchema),
  });

  const onSubmit: SubmitHandler<PhoneVerifyDto> = (data) => {
    dispatch(phoneVerification(data));
  };

  const onResendCode = () => {
    dispatch(phoneCodeResend());
  };

  const { t } = useTranslation('auth');

  return (
    <form css={verifyForm} onSubmit={handleSubmit(onSubmit)}>
      <div css={inputWrapper}>
        <div css={verifyText}>
          <span>
            {t('PHONE_VERIFICATION_TEXT_FIRST_PART')}
            {user && (
              <span css={verifyEntity}> {hideMainTextPart(user.phone)}</span>
            )}
            !
          </span>
          <span>{t('ENTER_VERIFICATION_CODE_BELOW')}!</span>
        </div>
        <Input
          {...register('code')}
          css={verifyInput}
          label={t('VERIFICATION_CODE')}
          variant="primary"
          type="text"
          name="code"
          error={t(getErrorKey('code', errors.code?.type))}
        />
        <Error text={error} />
      </div>
      <Button type="submit" width={'100%'}>
        {t('VERIFY_TEXT')}
      </Button>
      <hr css={divider} />
      <div>
        <ResendCodeButton
          onClickResend={onResendCode}
          timeLimit={RESEND_VERIFICATION_CODE_LIMIT_SEC}
        />
      </div>
    </form>
  );
};
