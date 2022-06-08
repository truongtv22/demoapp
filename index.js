import { registerRootComponent } from 'expo';
import codePush from 'react-native-code-push';

import App from './App';
import { ENV } from './src/environment';

const codePushOptions = {
  updateDialog: true,
  installMode: codePush.InstallMode.IMMEDIATE,
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  minimumBackgroundDuration: ENV === 'production' ? 120 : 0,
};
const CodePushedApp = codePush(codePushOptions)(App);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(CodePushedApp);
