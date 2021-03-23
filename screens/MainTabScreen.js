import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import EventHome from './Event/EventHome';
import EventDetails from './Event/EventDetails';
import CollectionHome from './Collection/CollectionHome';
import CollectionDetails from './Collection/CollectionDetails';
import WikiHome from './Wiki/WikiHome';
import WikiDetails from './Wiki/WikiDetails';
import VisitForm from './Visit/VisitForm';
import Cube from './360/Cube';

const HomeStack = createStackNavigator();

const CollectionStack = createStackNavigator();

const EventDetailsStack = createStackNavigator();

const WikiStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
  >
    <Tab.Screen
      name="Inicio"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Inicio',
        tabBarColor: '#fc6060',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Acervos"
      component={CollectionStackScreen}
      options={{
        tabBarLabel: 'Acervos',
        tabBarColor: '#1f65ff',
        tabBarIcon: ({ color }) => (
          <Icon name="archive" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Events"
      component={EventStackScreen}
      options={{
        tabBarLabel: 'Eventos',
        tabBarColor: '#694fad',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-calendar" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Glossário"
      component={WikiStackScreen}
      options={{
        tabBarLabel: 'Glossário',
        tabBarColor: '#d02860',
        tabBarIcon: ({ color }) => (
          <Icon name="boat" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#fc6060',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
      title: 'Início',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#fc6060" onPress={() => navigation.openDrawer()}></Icon.Button>
      ),
      headerRight: () => (
        <Icon.Button name="ios-add" size={25} backgroundColor="#fc6060" onPress={() => navigation.navigate('Visit')}></Icon.Button>
      )
    }} />

    <HomeStack.Screen name="Visit" component={VisitForm} options={{
      title: 'Detalhes de evento',
    }} />
  </HomeStack.Navigator>
);

const CollectionStackScreen = ({ navigation }) => (
  <CollectionStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#1f65ff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <CollectionStack.Screen name="Acervo" component={CollectionHome} options={{
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
      ),
      headerRight: () => (
        <Icon.Button name="cube" size={25} backgroundColor="#1f65ff" onPress={() => navigation.navigate('cube')}></Icon.Button>
      )
    }} />
    <CollectionStack.Screen name="collectionDetails" component={CollectionDetails} options={{
      title: "Acervo",
      headerRight: () => (
        <Icon.Button name="cube" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />
    <CollectionStack.Screen name="cube" component={Cube} options={{
      title: "360º"
    }} />
  </CollectionStack.Navigator>
);

const EventStackScreen = ({ navigation }) => (
  <EventDetailsStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#1f65ff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <EventDetailsStack.Screen name="Event" component={EventHome} options={{
      title: 'Eventos',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />
    <EventDetailsStack.Screen name="Eventi" component={EventDetails} options={{
      title: 'Detalhes de evento',
    }} />
  </EventDetailsStack.Navigator>
);
const WikiStackScreen = ({ navigation }) => (
  <WikiStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#1f65ff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <WikiStack.Screen name="wikiHome" component={WikiHome} options={{
      title: 'Glosário geológico',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />
    <WikiStack.Screen name="wikiDetails" component={WikiDetails} options={{
      title: 'Glosário geológico',
    }} />
  </WikiStack.Navigator>
);