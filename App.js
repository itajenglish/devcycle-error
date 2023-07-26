import React from 'react';
import { View, Text } from 'react-native';
import 'react-native-get-random-values';
import DeviceInfo from 'react-native-device-info';
import { withDevCycleProvider } from '@devcycle/react-native-client-sdk';

global.DeviceInfo = DeviceInfo;

function App() {
  return (
    <View>
      <Text>Test</Text>
    </View>
  );
}

export default withDevCycleProvider({
  sdkKey: 'dvc_client_5fa35ea4_9751_43ee_9189_866111ada5c5_a92179a',
})(App);
