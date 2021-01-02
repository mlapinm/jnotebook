1 [_Walkthrough: Expo and TypeScript - YouTube](#Walkthrough-Expo-and-TypeScript---YouTube)  
2 [_Lecture: Intro to React Native - YouTube](#Lecture-Intro-to-React-Native---YouTube)  
3 [_Walkthrough: Expo CLI - YouTube](#Walkthrough-Expo-CLI---YouTube)  
4 [_Lecture: React Native CLI - YouTube](#Lecture-React-Native-CLI---YouTube)  
5 [_Walkthrough: React Native CLI Simple App - YouTube](#Walkthrough-React-Native-CLI-Simple-App---YouTube)  
## Walkthrough: Expo and TypeScript - YouTube  
[Walkthrough: Expo and TypeScript - YouTube](https://www.youtube.com/watch?v=Tsd6_M0iXAg)  

https://stackedit.io/app#  

[Using TypeScript](https://docs.expo.io/guides/typescript/)  
expo init -t expo-template-blank-typescript

## Lecture: Intro to React Native - YouTube  
[Lecture: Intro to React Native - YouTube](https://www.youtube.com/watch?v=TAy3NCwL1dU)  
[Creating a new application](https://reactnative.dev/docs/environment-setup)  
npx react-native init r2022  
cd r2022
code .
anroid emulator start...
npx react-native run-android

## Walkthrough: Expo CLI - YouTube  
[Walkthrough: Expo CLI - YouTube](https://www.youtube.com/watch?v=9rK5FdbOqpk)  

[Setting up the development environment](https://reactnative.dev/docs/environment-setup)  
expo init e2022  
cd e2022  
code .
expo start    
ctrl-m
## Lecture: React Native CLI - YouTube  
[Lecture: React Native CLI - YouTube](https://www.youtube.com/watch?v=DYA6QMsq1fM)  
### 1
[Setting up the development environment](https://reactnative.dev/docs/environment-setup)  
npx react-native init q2022lecture  
D:\avi02prog\b07react\q2022lecture  
npx react-native run-android  
ANDROID_HOME  
C:\Users\User\AppData\Local\Android\Sdk  
[Using TypeScript with React Native](https://www.youtube.com/watch?v=MWFC17MIfOE&list=PL7eiW2bt21YU6QEbly78kUgQCNEiDUwSH&index=3)  

npx react-native init r2022
from expo+typescript copy:  
App.tsx, tsconfig.json
 
#### ???
"compilerOptions": {
"":"",
"include": ["src", "App.tsx"]
}

### yarn
[About global installs](https://yarnpkg.com/getting-started/install#about-global-installs)   
npm install -g yarn 

[Initializing](https://reactnative.dev/blog/2018/05/07/using-typescript-with-react-native#initializing)
react-native init MyAwesomeProject
cd MyAwesomeProject



## Walkthrough: React Native CLI Simple App - YouTube  
[Walkthrough: React Native CLI Simple App - YouTube](https://www.youtube.com/watch?v=U5seBFbbG9I)  

r2022  
https://jsonplaceholder.typicode.com  
https://jsonplaceholder.typicode.com/users  

```

import React from 'react';
import {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface IAppProps {}
interface IAppState {
  user: number,
  name: string
}[];
export default class App extends Component<IAppProps,IAppState> {

  constructor(props: IAppProps){
    super(props);
    this.state={
      users: []
    };
  }

  async componentDidMount(){
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    let users = await res.json();
    this.setState({users: users })
  }

  render(){
    return (
      <View style={styles.container}>
        {this.state.users.map(user => (
          <Text key={user.id} style = {styles.text}>{user.name}</Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0091ea',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 30,
  }
});
```
## expo eject
expo eject  
yarn android  
  