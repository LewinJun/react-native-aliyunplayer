/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Router from './src/router'

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Router);
