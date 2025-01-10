import Home from "../pages/b_main/Home";
import CocktailDetails from "../pages/b_main/CocktailDetails";
import CocktailsLibrary from "../pages/b_main/CocktailsLibrary";
import FiltersPage from "../pages/b_main/FiltersPage";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function RootStack() {
    const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CocktailDetails" component={CocktailDetails}/>
        <Stack.Screen name="CocktailsLibrary" component={CocktailsLibrary}/>
        <Stack.Screen name="FiltersPage" component={FiltersPage}/>
    </Stack.Navigator>
  );
}