import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import {
  withNavigationProvider,
  NavigationProvider,
} from 'react-native-navigation-hooks';

import {store} from '../redux/store';

import LoadingView from './LoadingView';
import LoginView from './LoginView';
import HomeView from './HomeView';
import ProfileView from './ProfileView';

export const registeredScreens = () => {
  Navigation.registerComponent(
    'LoadingView',
    () => props =>
      (
        <Provider store={store}>
          <LoadingView {...props} />
        </Provider>
      ),
    () => withNavigationProvider(LoadingView),
  );
  Navigation.registerComponent(
    'LoginView',
    () => props =>
      (
        <Provider store={store}>
          <LoginView {...props} />
        </Provider>
      ),
    () => withNavigationProvider(LoginView),
  );
  Navigation.registerComponent(
    'HomeView',
    () => props =>
      (
        <Provider store={store}>
          <NavigationProvider value={{componentId: props.componentId}}>
            <HomeView {...props} />
          </NavigationProvider>
        </Provider>
      ),
    () => withNavigationProvider(HomeView),
  );
  Navigation.registerComponent(
    'ProfileView',
    () => props =>
      (
        <Provider store={store}>
          <NavigationProvider value={{componentId: props.componentId}}>
            <ProfileView {...props} />
          </NavigationProvider>
        </Provider>
      ),
    () => withNavigationProvider(ProfileView),
  );
};
