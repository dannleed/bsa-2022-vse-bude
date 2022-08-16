import type { ReactNode } from 'react';
import { useEffect } from 'react';
import React from 'react';
import { auth as authHelper } from '@helpers';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { getCurrentUser } from 'store/profile';

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const { user } = useTypedSelector((state) => state.profile);

  const dispatch = useAppDispatch();

  const hasToken = !!authHelper.getAccessToken();
  const hasUser = !!user;

  useEffect(() => {
    if (!hasUser && hasToken) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, hasUser, hasToken]);

  return <React.Fragment>{children}</React.Fragment>;
};

export { AuthProvider };
