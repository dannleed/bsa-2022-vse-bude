import React, { FC, useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '~/hooks/hooks';
import { favoritesMapper } from '~/helpers/helpers';
import {
  selectCurrentUser,
  selectFavoriteIds,
  selectFavorites,
  selectGuestFavorites,
} from '~/store/selectors';
import { products as productsActions } from '~/store/actions';
import { ScreenWrapper, FlatList, Spinner } from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { guestFavoritesMapper } from '~/helpers/favorites/guest-favorites-mapper';
import { FavoriteCard } from './components/favorite-card';

const Favorite: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const user = useAppSelector(selectCurrentUser);
  const storedFavorites = useAppSelector(selectFavorites);
  const favoriteIds = useAppSelector(selectFavoriteIds);
  const guestFavorites = useAppSelector(selectGuestFavorites);
  const dispatch = useAppDispatch();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setIsLoading(true);
      switch (Boolean(user)) {
        case true:
          dispatch(productsActions.fetchFavorites({ limit: 10 }))
            .unwrap()
            .finally(() => setIsLoading(false));
          break;
        case false:
          favoriteIds.map((id) => {
            dispatch(productsActions.fetchGuestFavorites(id))
              .unwrap()
              .finally(() => setIsLoading(false));
          });
          break;
      }
    }
  }, [dispatch, isFocused]);

  const favorites = user
    ? favoritesMapper(storedFavorites)
    : guestFavoritesMapper(guestFavorites);

  if (isLoading) {
    return (
      <ScreenWrapper style={globalStyles.justifyContentCenter}>
        <Spinner />
      </ScreenWrapper>
    );
  }

  return (
    <ScreenWrapper>
      <FlatList
        data={favorites}
        contentContainerStyle={[globalStyles.px4, globalStyles.mt3]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FavoriteCard product={item} />}
      />
    </ScreenWrapper>
  );
};

export { Favorite };
