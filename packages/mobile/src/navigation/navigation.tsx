import React, { FC } from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { useAppSelector } from '~/hooks/hooks';
import { RootScreenName } from '~/common/enums/enums';
import { RootNavigationParamList } from '~/common/types/types';
import {
  MessagesScreen,
  PersonalInfoScreen,
  ProductInfo,
  SettingsScreen,
  SupportScreen,
} from '~/screens/screens';
import { selectCurrentUser } from '~/store/selectors';
import { HeaderLeft } from '~/components/components';
import { MainNavigation } from './tabs/tabs.navigation';

const NativeStack = createNativeStackNavigator<RootNavigationParamList>();
const Stack = createNativeStackNavigator<RootNavigationParamList>();

const mainScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const accountScreenOptions: NativeStackNavigationOptions = {
  headerShown: true,
  headerTitleAlign: 'center',
};

const productScreenOptions: NativeStackNavigationOptions = {
  headerShown: true,
  headerTitleAlign: 'center',
  headerLeft: () => <HeaderLeft label="List" />,
};

const Navigation: FC = () => {
  const user = useAppSelector(selectCurrentUser);

  return (
    <NativeStack.Navigator screenOptions={mainScreenOptions}>
      <NativeStack.Screen
        name={RootScreenName.MAIN}
        component={MainNavigation}
      />
      <NativeStack.Group screenOptions={productScreenOptions}>
        <Stack.Screen
          name={RootScreenName.PRODUCT_INFO}
          component={ProductInfo}
        />
      </NativeStack.Group>
      {user && (
        <NativeStack.Group screenOptions={accountScreenOptions}>
          <Stack.Screen
            name={RootScreenName.PERSONAL_INFO}
            component={PersonalInfoScreen}
          />
          <Stack.Screen
            name={RootScreenName.SETTINGS}
            component={SettingsScreen}
          />
          <Stack.Screen
            name={RootScreenName.MESSAGES}
            component={MessagesScreen}
          />
          <Stack.Screen
            name={RootScreenName.SUPPORT}
            component={SupportScreen}
          />
        </NativeStack.Group>
      )}
    </NativeStack.Navigator>
  );
};

export { Navigation };
