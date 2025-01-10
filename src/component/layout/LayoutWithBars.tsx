import {FC} from 'react';
import {Text, View, StyleSheet} from "react-native";
import TopNavbar from "../navbar/TopNavbar";
import BottomNavbar from "../navbar/BottomNavbar";

const styles = StyleSheet.create({
    navbars: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
    },
    navbar1: {
        display: "flex",
        backgroundColor: "#FBB4A5",
        width: "100%",
        height: 100,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    navbar2: {
        display: "flex",
        backgroundColor: "#FBB4A5",
        width: "100%",
        height: 77,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    }
})

const LayoutWithBars: FC<{}> = ({}) => {
    return (
        <View style={styles.navbars}>
            <View style={styles.navbar1}>
                <TopNavbar/>
            </View>
            <View style={styles.navbar2}>
                <BottomNavbar/>
            </View>
        </View>
    );
};

export default LayoutWithBars;
