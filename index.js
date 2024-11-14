/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {CustomApp} from './src/CustomApp';

AppRegistry.registerComponent(appName, () => CustomApp);
