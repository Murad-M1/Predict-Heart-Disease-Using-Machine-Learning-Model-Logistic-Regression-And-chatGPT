import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FirstPage from "./screens/FirstPage";
import SecondPage from "./screens/SecondPage";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={{
            title: "Heart disease prediction",
            headerStyle: {
              backgroundColor: "#839EC8",
            },
          }}
        />
        <Stack.Screen
          name="SecondPage"
          component={SecondPage}
          options={{
            title: "Heart disease prediction result",
            headerStyle: {
              backgroundColor: "#839EC8",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
