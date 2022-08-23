import { AccountRoutes, Routes, IconName } from '@enums';
import { Icon } from '@primitives';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { logOut } from 'store/profile';
import * as styles from '../styles';
import type { PopoverContentProps } from '../types';

export const PopoverContent = ({ handleClose }: PopoverContentProps) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    let path = '/';

    e.target.hasAttribute('path-label')
      ? (path = e.target.getAttribute('path-label'))
      : (path = e.target.parentElement.getAttribute('path-label'));

    router.push(path);
    handleClose();
  };

  return (
    <div css={styles.popoverContentWrapper}>
      <button
        css={styles.popoverContentItem}
        onClick={handleClick}
        path-label={Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_PERSONAL}
        data-variant="icon"
      >
        <Icon icon={IconName.USER} color="yellow" />
        <span>Personal Info</span>
      </button>
      <button
        css={styles.popoverContentItem}
        onClick={handleClick}
        path-label={Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_LIST}
        data-variant="icon"
      >
        <Icon icon={IconName.LIST} color="yellow" />
        <span>My List</span>
      </button>
      <button
        css={styles.popoverContentItem}
        onClick={handleClick}
        path-label={Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_SETTINGS}
        data-variant="icon"
      >
        <Icon icon={IconName.SETTINGS} color="yellow" />
        <span>Settings</span>
      </button>
      <button
        css={styles.popoverContentItem}
        onClick={handleClick}
        path-label={Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_MESSAGES}
        data-variant="icon"
      >
        <Icon icon={IconName.MESSAGE} color="yellow" />
        <span>Messages</span>
      </button>
      <button
        css={styles.popoverContentItem}
        onClick={handleClick}
        path-label={Routes.USER_ACCOUNT + AccountRoutes.ACCOUNT_LIST}
        data-variant="icon"
      >
        <Icon icon={IconName.SUPPORT} color="yellow" />
        <span>Support</span>
      </button>
      <button
        css={styles.popoverContentItem}
        onClick={() => {
          dispatch(logOut());
        }}
        data-variant="icon"
      >
        <Icon icon={IconName.SIGN_OUT} color="yellow" />
        <span>Sign Out</span>
      </button>
    </div>
  );
};
