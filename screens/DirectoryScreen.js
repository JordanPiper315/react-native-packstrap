import { FlatList } from "react-native";
import { Avatar, ListItem } from "react-native-elements";

const DirectoryScreen = (props) => {
    const renderDirectoryItem = ({ item: card }) => {
        return (
            <ListItem>
                <Avatar source={card.image} rounded />
                <ListItem.Content>
                    <ListItem.Title>{card.name}</ListItem.Title>
                    <ListItem.Subtitle>
                        {card.description}
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        )
    }

    return (
        <FlatList
            data={props.cards}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    )
}

export default DirectoryScreen

