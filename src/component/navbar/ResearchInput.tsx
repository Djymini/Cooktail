import {Searchbar} from "react-native-paper";
import React, {Component} from "react";
import {Image, StyleSheet, View} from "react-native";

class ResearchInput extends Component {
    state = {
        search: '',
    };

    updateSearch = (search) => {
        this.setState({search}); // La fonction fléchée conserve le contexte
    };

    render() {
        const {search} = this.state;

        return (
            <View style={styles.navbar}>
                <Searchbar
                    style={styles.searchBar}
                    placeholder="Recherche..."
                    onChangeText={this.updateSearch}
                    value={search}
                />
                <Image style={styles.logo} source={require('../../../assets/Logo.jpg')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    navbar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    searchBar: {
        display: "flex",
        alignItems: "flex-end",
        width: "50%",
        marginTop: 20,
        marginLeft: 5,
        borderRadius: 9,
        backgroundColor: "#FF6F61"
    },
    logo: {
        width: 65,
        height: 65,
        borderRadius: 90,
        marginTop: 20,
        marginRight:5,
    }
})

export default ResearchInput;
