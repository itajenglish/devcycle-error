export default {
  name: 'Test App',
  orientation: 'portrait',
  scheme: 'testapp',
  version: '1.0.0',
  assetBundlePatterns: ['**/*'],
  android: {
    versionCode: 1,
    package: 'com.test.app',
  },
  ios: {
    buildNumber: '1',
    bundleIdentifier: 'com.test.app',
  },
  plugins: [
    'newrelic-react-native-agent',
    [
      'expo-build-properties',
      {
        ios: {
          useFrameworks: 'static',
          deploymentTarget: '13.0',
        },
        android: {
          compileSdkVersion: 33,
          targetSdkVersion: 33,
          buildToolsVersion: '33.0.0',
        },
      },
    ],
    [
      'expo-image-picker',
      {
        photosPermission: 'Allow access to your photos to be able to upload media stored in your library.',
        cameraPermission: 'Allow access to your camera to be able to upload media you take.',
      },
    ],
  ],
};
