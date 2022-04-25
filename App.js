import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import signup from "./screens/signup";
import tabs from "./navigation/tabs";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        borders: "transparent"
    }
}

const stack = createStackNavigator()

export default function App() {
    return (
        <NavigationContainer theme={theme}>
            <stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName={'SignUp'}
            >
                <stack.Screen name="SignUp" component={signup} />
                <stack.Screen name="Home" component={tabs} />
            </stack.Navigator>
        </NavigationContainer>
    );
}
