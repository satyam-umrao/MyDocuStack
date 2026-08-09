export const setupData = {
  cli: {
    title: 'React Native CLI',
    subtitle: 'Full Native Control & Direct Native Modules',
    badge: 'Bare Native Workflow',
    description: 'The React Native CLI gives you direct access to native Android (Java/Kotlin) and iOS (Objective-C/Swift) code bases. Ideal when you need custom native dependencies, specialized C++ modules, or deep OS integration.',
    prerequisites: [
      'Node.js (v18+ recommended)',
      'JDK 17 (Java Development Kit) & Android Studio for Android build target',
      'macOS, Xcode & CocoaPods for iOS target'
    ],
    commands: {
      init: 'npx @react-native-community/cli@latest init MyApp',
      cd: 'cd MyApp',
      start: 'npm start',
      android: 'npm run android',
      ios: 'npm run ios'
    },
    steps: [
      { step: 1, title: 'Initialize Project', desc: 'Run the standard initialization command to generate full /android and /ios native directories.' },
      { step: 2, title: 'Configure Environment', desc: 'Ensure ANDROID_HOME environment variables and Java JDK paths are set.' },
      { step: 3, title: 'Launch Metro Bundler', desc: 'Execute npm start to trigger the JavaScript Metro bundler daemon.' },
      { step: 4, title: 'Compile & Run Native App', desc: 'In a separate terminal tab, run npm run android (or npm run ios on macOS).' }
    ],
    folderStructure: `MyApp/
├── android/          # Native Android Java/Kotlin source & Gradle settings
├── ios/              # Native iOS Xcode workspace & CocoaPods Podfile
├── src/              # React Native JavaScript / TypeScript code
├── App.tsx           # App Root Component
├── index.js          # Entry point registering App with AppRegistry
├── metro.config.js   # Metro Bundler Configuration
└── package.json`
  },
  expo: {
    title: 'Expo CLI',
    subtitle: 'Streamlined Workflow & Instant Mobile Previews',
    badge: 'Managed & Prebuild Workflow',
    description: 'Expo is the official framework recommended by the React Native team. It accelerates mobile app development with instant QR-code previews on physical devices, built-in cloud builds (EAS), and cross-platform native SDKs without requiring Android Studio/Xcode configuration upfront.',
    prerequisites: [
      'Node.js (v18+ recommended)',
      'Expo Go app on iOS/Android or emulator/simulator',
      'No initial Xcode/Android Studio requirement'
    ],
    commands: {
      init: 'npx create-expo-app@latest MyApp',
      cd: 'cd MyApp',
      start: 'npx expo start',
      android: 'npx expo run:android',
      ios: 'npx expo run:ios'
    },
    steps: [
      { step: 1, title: 'Create Expo Project', desc: 'Initialize with npx create-expo-app@latest for pre-configured TypeScript & navigation templates.' },
      { step: 2, title: 'Start Expo Development Server', desc: 'Execute npx expo start to open Metro Bundler with QR code generation.' },
      { step: 3, title: 'Preview Instantly on Mobile', desc: 'Scan the QR code using the Expo Go camera (iOS) or Expo Go app (Android) for immediate hot reloading.' },
      { step: 4, title: 'EAS Build & Prebuild', desc: 'Run npx expo prebuild whenever custom native native code or plugins are added.' }
    ],
    folderStructure: `MyApp/
├── app/              # File-based routing structure (Expo Router v3+)
├── assets/           # Images, fonts, and static media assets
├── App.js            # Main Component Entry Point
├── app.json          # Expo configuration (App name, icon, splash screen)
├── package.json      # Dependencies and scripts
└── tsconfig.json     # TypeScript configuration`
  }
};
