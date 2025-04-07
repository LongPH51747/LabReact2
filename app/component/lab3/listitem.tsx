import React from "react";
import { StyleSheet } from "react-native";
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated"

type ListItemProps = {
    item: {id: string}
    viewableItems: any
}

const ListItem: React.FC<ListItemProps> = React.memo(
    ({item, viewableItems}:{item: any, viewableItems: any}) => {
        const rStyle = useAnimatedStyle (()=>{
            const isVisible = Boolean(
                viewableItems.value.filter((item:any) => item.isViewable).find((viewableItem:any) => viewableItem.item.id === item.id),
            );
            return{
                opacity: withTiming(isVisible ? 1 : 0),
                transform: [
                    {
                        scale: withTiming(isVisible ? 1 : 0.6)
                    },
                ],
            };
        },[]);
        return <Animated.View style={[rStyle,styles.item]}/>
    }
)
const styles = StyleSheet.create({
    item: {
        width: "90%",
        height: 100,
        backgroundColor: "#4CAF50",
        marginVertical: 10,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    text: {
        color: "white",
        fontSize: 18,
    },
})
export default ListItem