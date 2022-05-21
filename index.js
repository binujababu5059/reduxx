import { registerRootComponent } from 'expo';
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

const RNRedux = () => (
    <Provider store = {store}>
        <App />
    </Provider>
)

// AppRegistry.registerComponent('main', () => RNRedux);
//registerRootComponent(App);
AppRegistry.registerComponent(appName, () => RNRedux)
