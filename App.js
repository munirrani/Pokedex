import React, { useContext } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from "./pages/Home"
import PokemonStats from './pages/PokemonStats';
import { ThemeProvider, ThemeContext } from './util/ThemeManager'
import Selection from './components/Selection';
import { useWindowDimensions } from 'react-native';
 
const Stack = createStackNavigator()

const ThemeLight = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
  },
};

const ThemeDark = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#212121',
  },
};

const App = () => {
  const layout = useWindowDimensions()
  const { themeStyle, isDark } = useContext(ThemeContext)

  const headerStyles = {
    headerStyle: {
        height: layout.height / 9,
        backgroundColor: themeStyle.backgroundColor
    },
    headerTitleStyle: {
        color: themeStyle.headerTitleColor,
        fontSize: 30,
        fontWeight: "700",
        marginLeft: "4%",
    },
    headerTitleAlign: "left",
    title: "Pokedex",
  }
  

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={isDark ? ThemeDark : ThemeLight}>
        <Stack.Navigator screenOptions={{
          headerRight: () => (<Selection />)
        }} headerMode="screen" initialRouteName="Home">
          <Stack.Screen 
            name="Home" 
            component={Home} 
            options={headerStyles}
            />
          <Stack.Screen 
            name="PokemonStats" 
            component={PokemonStats}
            options={{
              headerShown: false
            }}
            />
        </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default function AppWrapper() {
  return(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )
}