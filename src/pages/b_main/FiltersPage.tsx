import {StyleSheet, Text, View} from 'react-native';

export default function FiltersPage() {
    return (
        <View style={styles.container}>
            <Text>Page de filtre</Text>
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