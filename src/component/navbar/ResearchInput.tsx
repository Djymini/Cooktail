import React, {useState} from "react";
import {StyleSheet} from "react-native";
import {Searchbar} from "react-native-paper";

const styles = StyleSheet.create({
    searchBar: {
        width: "70%",
        marginVertical: 10,
        borderRadius: 9,
        backgroundColor: "#FF6F61",
        display: "flex",
        alignItems: "flex-end",
    },
});

const ResearchInput = () => {
    const [search, setSearch] = useState("");

    return (
        <Searchbar
            style={styles.searchBar}
            placeholder="Recherche..."
            onChangeText={setSearch}
            value={search}
        />
    );
};

export default ResearchInput;
