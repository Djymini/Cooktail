import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./src/pages/b_main/Home";
import CocktailDetails from "./src/pages/b_main/CocktailDetails";
import CocktailsLibrary from "./src/pages/b_main/CocktailsLibrary";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CocktailsLibrary/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
