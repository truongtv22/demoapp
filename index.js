import { registerRootComponent } from 'expo';
import codePush from 'react-native-code-push';

import App from './App';
import { ENV } from './src/environment';

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.ON_NEXT_SUSPEND,
  minimumBackgroundDuration: ENV === 'production' ? 120 : 0,
};
const CodePushedApp = codePush(codePushOptions)(App);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(CodePushedApp);
