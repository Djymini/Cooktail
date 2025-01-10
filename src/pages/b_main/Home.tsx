import {StyleSheet, View} from 'react-native';
import * as React from 'react';
import {
    createStaticNavigation,
    useNavigation,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button} from '@react-navigation/elements';

export default function Home() {
    const navigation:any = useNavigation();
    return (
        <View style={styles.container}>
            <Button onPress={() => navigation.navigate('FiltersPage')}>
                Go to La page de filtre
            </Button>
            <Button onPress={() => navigation.navigate('CocktailDetails')}>
                Go to La page de Cocktails
            </Button>
            <Button onPress={() => navigation.navigate('CocktailsLibrary')}>
                Go to La page de librairie
            </Button>
            <Button onPress={() => navigation.navigate('Details')}>
                Go to Details
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});