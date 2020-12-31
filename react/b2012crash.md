## React Native Crash Course 2020 expo-cli
[React Native Crash Course 2020](https://www.youtube.com/watch?v=Hf4MJH0jDb4&list=RDCMUC29ju8bIPH5as8OGnQzwJyA&start_radio=1)  
## 1 setup expo-cli
npm install -g expo-cli
## 2 setup project r2022lishop ListShopping
- expo init r2022lishop
- cd r2022lishop
- npm run android
- Run on Android device/emulator

```
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open</Text>
      <Image
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />      
      <Image source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}} style={styles.img} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'blue',
    fontSize: 30
  },
  img:{
    width:100,
    height:100,
    borderRadius: 100./2
  }
});
```

## footer
[Setting up the development environment](https://reactnative.dev/docs/environment-setup)  
