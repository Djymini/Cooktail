import {FC} from 'react';
import {View, Text} from "react-native";
import ResearchInput from "./ResearchInput";

const SearchBar: FC<{}> = ({}) => {
    let search;
    return (
        <View>
            <ResearchInput/>
        </View>
    );
};

export default SearchBar;
