import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import {
  withNavigationProvider,
  NavigationProvider,
} from 'react-native-navigation-hooks';

import { store } from '../redux/store';

import LoadingView from './LoadingView';
import LoginView from './LoginView';
import HomeView from './HomeView';
import ProfileView from './ProfileView';
import LoginNext1 from './LoginNext1';
import LoginNext2 from './LoginNext2';
import Bottom from './BottomTabNavigator';


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
    options = { topBar: { visible: false, height: 0, } }
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
    LoginView.options = {
      topBar: {
        visible: false
      },
      bottomBar: {
        visible: false,
        drawBehind: true
      }
    }
  );
  Navigation.registerComponent(
    'HomeView',
    () => props =>
    (
      <Provider store={store}>
        <NavigationProvider value={{ componentId: props.componentId }}>
          <HomeView {...props} />
        </NavigationProvider>
      </Provider>
    ),
    () => withNavigationProvider(HomeView),
    HomeView.options = {
      topBar: {
        visible: false
      },
      bottomBar: {
        visible: false,
        drawBehind: true
      }
    }
  );
  Navigation.registerComponent(
    'ProfileView',
    () => props =>
    (
      <Provider store={store}>
        <NavigationProvider value={{ componentId: props.componentId }}>
          <ProfileView {...props} />
        </NavigationProvider>
      </Provider>
    ),
    () => withNavigationProvider(ProfileView),
  );
  Navigation.registerComponent(
    'LoginNext1',
    () => props =>
    (
      <Provider store={store}>
        <LoginNext1 {...props} />
      </Provider>
    ),
    () => withNavigationProvider(LoginNext1),
    LoginNext1.options = {
      topBar: {
        visible: false
      },
      bottomBar: {
        visible: false,
        drawBehind: true
      }
    }
  );
  Navigation.registerComponent(
    'LoginNext2',
    () => props =>
    (
      <Provider store={store}>
        <LoginNext2 {...props} />
      </Provider>
    ),
    () => withNavigationProvider(LoginNext2),
    LoginNext2.options = {
      topBar: {
        visible: false
      },
      bottomBar: {
        visible: false,
        drawBehind: true
      }
    }
  );
  Navigation.registerComponent(
    'Bottom',
    () => props =>
    (
      <Provider store={store}>
        <Bottom {...props} />
      </Provider>
    ),
    () => withNavigationProvider(Bottom),
    Bottom.options = {
      topBar: {
        visible: false
      },
      bottomBar: {
        visible: false,
        drawBehind: true
      }
    }
  );
};
