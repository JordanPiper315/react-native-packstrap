import { useState } from "react";
import { HOMEPAGECARDS } from '../shared/homepagecards'
import { FlatList } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import DirectoryScreen from './DirectoryScreen';

const Main = () => {
    const [cards, setCards] = useState(HOMEPAGECARDS);

    return <DirectoryScreen cards={cards} />
}

export default Main



