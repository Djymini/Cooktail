import React, {FC} from 'react';
import {View, Image, StyleSheet} from "react-native";
import ResearchInput from "./ResearchInput";

const styles = StyleSheet.create({
    navbar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 5,
    },
    logo: {
        width: 65,
        height: 65,
        borderRadius: 32.5,
    }
});

const TopNavbar: FC<{}> = ({}) => {
    return (
        <View style={styles.navbar}>
            <ResearchInput/>
            <Image style={styles.logo} source={require('../../../assets/Logo.jpg')}/>
        </View>
    );
};

export default TopNavbar;
