import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { AddGroup, AddUser, Groups, Lists, SingleList } from "../components/index";

export const FeedStack = StackNavigator({
  AppHome: {
    screen: Groups,
    navigationOptions: {
      title: 'Groups',
    },
  },
  Jobs: {
    screen: Lists,
    navigationOptions: {
      title: 'Lists'
    },
  },
  Home: {
    screen: AddUser,
    navigationOptions: {
      title: 'Add User',
    }
  },
});

export const Tabs = TabNavigator({
  AppHome: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: () => <Icon name="home" size={22} style={{color:'gray'}} />,
    },
  },
  Jobs: {
    screen: MapScreen,
    navigationOptions: {
      tabBarLabel: 'My Jobs',
      tabBarIcon: () => <Icon name="briefcase" size={22} style={{color:'gray'}} />,
    },
  },
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Change ID#',
      tabBarIcon: () => <Icon name="gear" size={22} style={{color:'gray'}} />,
    },
  },
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  Settings: {
    screen: AppHome,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});