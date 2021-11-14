import React from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import {Provider, useSelector} from 'react-redux';
import Routers from './routes';
import store from './redux/store';
import {Loading} from './components';

const MainApp = () => {
  LogBox.ignoreLogs([
    'Require cycles are allowed, but can result in uninitialized values.',
    'Non-serializable values were found in the navigation state',
  ]);

  const {isLoading} = useSelector(state => state.globalReducer);
  return (
    <NavigationContainer>
      <Routers />
      <FlashMessage position="top" />
      {isLoading && <Loading />}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
