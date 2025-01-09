import {StyleSheet, Text, View} from "react-native";

export default function CocktailDetails() {
    return (
        <View style={styles.container}>
            <Text>Page Cocktail</Text>
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