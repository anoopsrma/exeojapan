import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Details, Search2 } from "./src/Screen";
import { Home } from "./src/Home";
import { Search } from "./src/Search";
import { SearchDetail } from "./src/SearchDetail";
import { Button, StatusBar } from 'react-native';

const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} options={{
      headerStyle: {
        backgroundColor: '#d93f2c'
      },
      headerTintColor: '#fff',
      headerTitleStyle: { alignSelf: 'center' },
    }} />
    <HomeStack.Screen name="Details" component={Details} options={({ route }) => ({
      title: route.params.name
    })} />
  </HomeStack.Navigator>
);

const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="Search" component={Search} options={{
      headerStyle: {
        backgroundColor: '#d93f2c'
      },
      headerTintColor: '#fff',
      headerTitleStyle: { alignSelf: 'center' },
    }} />
    <SearchStack.Screen name="SearchDetail" component={SearchDetail}
    options={{
      headerStyle: {
        backgroundColor: '#d93f2c'
      },
      headerTintColor: '#fff',
      headerTitleStyle: { alignSelf: 'center' },
    }}/>
  </SearchStack.Navigator>
);

export default () => (
  <>
    <StatusBar
      backgroundColor="#d93f2c"
      barStyle="light-content"
    />
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#fff',
          style: {
            backgroundColor: '#d93f2c',
            padding: 5
          },
          labelPosition: "below-icon",
          labelStyle: {
            fontSize: 12,
          },
        }}>
        <Tabs.Screen name="Home" component={HomeStackScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}>
        </Tabs.Screen>
        <Tabs.Screen name="Search" component={SearchStackScreen} options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
        }}>
        </Tabs.Screen>
        <Tabs.Screen name="Favs" component={HomeStackScreen} options={{
          tabBarLabel: 'Favs',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="star-circle" color={color} size={size} />
          ),
        }}>
        </Tabs.Screen>
        <Tabs.Screen name="Feed" component={HomeStackScreen} options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-open" color={color} size={size} />
          ),
        }}>
        </Tabs.Screen>
        <Tabs.Screen name="More" component={HomeStackScreen} options={{
          tabBarLabel: 'More',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="dots-horizontal" color={color} size={size} />
          ),
        }}>
        </Tabs.Screen>
      </Tabs.Navigator>
      {/* <AuthStack.Navigator>
      <AuthStack.Screen name='SignIn' component={SignIn}  options={{ title: 'Sign In'}}/>
      <AuthStack.Screen name='CreateAccount' component={CreateAccount} options={{ title: 'Create Account'}}/>
    </AuthStack.Navigator> */}
    </NavigationContainer>
  </>
);
