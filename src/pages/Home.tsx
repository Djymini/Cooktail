import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text>Page Home</Text>
            <Text>Page Home</Text>
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