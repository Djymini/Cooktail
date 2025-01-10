import {FC} from 'react';
import {Text, View, StyleSheet} from "react-native";
import SearchBar from "../navbar/SearchBar";

const LayoutWithBars: FC<{}> = ({}) => {
    return (
        <>
            <View style={styles.container}>
                <SearchBar/>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        backgroundColor: "#FBB4A5",
        width: "100%",
        height: 100,
        justifyContent: "center",
    }
})

export default LayoutWithBars;
