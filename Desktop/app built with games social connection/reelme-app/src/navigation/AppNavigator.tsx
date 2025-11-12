import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useMemo, useState } from 'react';
import { Platform } from 'react-native';
import { palette } from '../theme';
import { CirclesScreen } from '../screens/CirclesScreen';
import { CreatorStudioScreen } from '../screens/CreatorStudioScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { OnboardingScreen } from '../screens/OnboardingScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { ChatScreen } from '../screens/ChatScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const tabBarStyle = {
  backgroundColor: 'rgba(5,9,22,0.9)',
  borderTopColor: 'rgba(124,58,237,0.3)',
  borderTopWidth: 1,
  elevation: 0,
  height: 80,
  paddingBottom: 16,
  paddingTop: 12,
};

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: palette.midnight,
    card: palette.midnight,
    text: palette.frostedWhite,
    border: 'rgba(124,58,237,0.4)',
    primary: palette.aquaBlue,
  },
};

const iconMap: Record<string, keyof typeof Ionicons.glyphMap> = {
  Home: 'aperture-outline',
  Circles: 'people-circle-outline',
  Chat: 'chatbubble-ellipses-outline',
  Creator: 'sparkles-outline',
  Profile: 'person-circle-outline',
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle,
        tabBarIcon: ({ color, size, focused }) => {
          const iconName = iconMap[route.name] ?? 'ellipse-outline';
          return <Ionicons name={iconName} size={focused ? size + 6 : size} color={focused ? palette.aquaBlue : color} />;
        },
        tabBarActiveTintColor: palette.aquaBlue,
        tabBarInactiveTintColor: 'rgba(244,247,251,0.5)',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Circles" component={CirclesScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Creator" component={CreatorStudioScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export const AppNavigator = () => {
  const [hasOnboarded, setHasOnboarded] = useState(false);

  const screenOptions = useMemo(
    () => ({
      headerShown: false,
      animation: Platform.OS === 'ios' ? 'fade_from_bottom' : 'fade',
      gestureEnabled: true,
    }),
    [],
  );

  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator screenOptions={screenOptions}>
        {!hasOnboarded ? (
          <Stack.Screen name="Onboarding">
            {() => <OnboardingScreen onGetStarted={() => setHasOnboarded(true)} />}
          </Stack.Screen>
        ) : null}
        <Stack.Screen name="Main" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

