
import { StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import RootStack from "./src/rooting/RootStack";

export default function App() {
  return (
    <NavigationContainer>
      <RootStack/>
    </NavigationContainer>
  );
}
