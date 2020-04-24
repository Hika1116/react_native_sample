import React from 'react';
import { Button, Text, View , FlatList, StyleSheet, SectionList, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const styles = StyleSheet.create({
  hoge: {
    color: 'white',
    backgroundColor: '#3E62B8',
  },
  homeStyle:{
    backgroundColor: '#FFFFCC',flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  memberStyle: {
    backgroundColor: '#FFFFFF',flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  rankStyle: {
    backgroundColor: '#CCFFFF',flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  settingStyle: {
    backgroundColor: '#99FF99',flex: 1, justifyContent: 'center', alignItems: 'center'
  },
});

function StartScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.hoge}>Start Screen</Text>
      <Button
        title="Go to MainPage"
        onPress={() => navigation.navigate('Main')}
      />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.homeStyle}>
      <Text style={styles.hoge}>Home Screen</Text>
    </View>
  );
}

function MemberScreen() {
  let dataList = [{id:"1", data:"廣瀬輝"}];

//   firestore().collection("users").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       let temp_data = {};
//       temp_data.id = doc.id;
//       temp_data.data = doc.data().name;
//       dataList.push(temp_data);
//       console.log(doc.data().name);
//     });
// });

// let count = 0;
// while (true) {
//   if(count > 100000000000) {
//     console.log(count);
//     break;
//   }
//   count++;
// }

console.log(dataList);

  function Item({ title }) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }

  return (
    <View style={styles.memberStyle}>
      <View style={styles.container}>
      <FlatList
        data={dataList}
        renderItem={({ item }) => <Item title={item.data} />}
        keyExtractor={item => item.id}
      />
      </View>
    </View>
  );
}


function RankScreen() {
  return (
    <View style={styles.rankStyle}>
      <Text style={styles.hoge}>Rank Screen</Text>
    </View>
);
}

function SettingScreen() {
  return (
    <View style={styles.settingStyle}>
      <Text style={styles.hoge}>Setting Screen</Text>
    </View>
  );
}



const Tab = createMaterialBottomTabNavigator();

function MainBottomTabStack(){
  return (
    <Tab.Navigator
            initialRouteName="Home"
            activeColor="#333333"
            inactiveColor="#BBBBBB"
            barStyle={{ backgroundColor: '#FFFFFF' }}
          >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            tabBarLabel: 'ホーム',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={25} />
            ),
          }} />
        <Tab.Screen 
          name="Member"
          component={MemberScreen}
          options={{
            tabBarLabel: 'メンバー',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="format-list-checkbox" color={color} size={25} />
            ),
          }} />
        <Tab.Screen 
          name="Rank" 
          component={RankScreen} 
          options={{
            tabBarLabel: 'ランキング',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="flag" color={color} size={25} />
            ),
          }}/>
        <Tab.Screen 
          name="Setting" 
          component={SettingScreen}
          options={{
            tabBarLabel: '設定',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="face" color={color} size={25} />
            ),
          }}/>
      </Tab.Navigator>
  );
}

const StartStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StartStack.Navigator mode="modal">
        <StartStack.Screen name="Start" component={StartScreen} />
        <StartStack.Screen name="Main" component={MainBottomTabStack} />
      </StartStack.Navigator>
    </NavigationContainer>
  );
}
