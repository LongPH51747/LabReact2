import { FlatList, View, ViewToken } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import ListItem from "./listitem";

const list = [
    { id: "1" }, 
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
    { id: "9" },
    { id: "10" },
    { id: "11" },
    { id: "12" },
    { id: "13" },
    { id: "14" },
    { id: "17" },
    { id: "19" },
    { id: "20" },
    { id: "21" },
];

export default function Bai2() {
  const viewableItems = useSharedValue<ViewToken[]>([]);
  return (
    <View>
      <FlatList
        data={list}
        onViewableItemsChanged={({ viewableItems: vItems }) => {
          viewableItems.value = vItems;
        }}
        renderItem={({ item }) => {
          return <ListItem item={item} viewableItems={viewableItems} />;
        }}
      ></FlatList>
    </View>
  );
}
