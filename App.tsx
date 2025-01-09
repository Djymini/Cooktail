import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./src/pages/Home";
import CocktailDetails from "./src/pages/CocktailDetails";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CocktailDetails/>
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
