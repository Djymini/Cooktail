import {FC} from 'react';
import {StyleSheet, View} from "react-native";
import {Icon} from "react-native-paper";

const styles = StyleSheet.create({
    navbar: {
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
    }
})

const BottomNavbar: FC<{}> = ({}) => {
    return (
        <View style={styles.navbar}>
            <Icon size={60} source="home-outline"/>
            <Icon size={60} source="glass-cocktail"/>
            <Icon size={60} source="google-downasaur"/>
        </View>
    );
};

export default BottomNavbar;
