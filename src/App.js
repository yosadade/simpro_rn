import React from 'react';
import {LogBox, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import {Provider, useSelector} from 'react-redux';
import Routers from './routes';
import store from './redux/store';
import {Loading} from './components';

const MainApp = () => {
  LogBox.ignoreAllLogs();

  const {isLoading} = useSelector(state => state.globalReducer);
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#484c7f" />
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
