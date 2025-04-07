import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ListItem from "./listitem";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export default function Bai3() {
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
  const HEADER_MAX_HEIGHT = 350;
  const HEADER_MIN_HEIGHT = 70;
  const AVATAR_MAX_SIZE = 80;
  const AVATAR_MIN_SIZE = 40;
  const SIZE_MAX = 35;
  const SIZE_Min = 15;
  const scrollY = useSharedValue(0);
  const animatedHeaderStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(
        Math.max(HEADER_MAX_HEIGHT - scrollY.value, HEADER_MIN_HEIGHT)
      ),
    };
  });
  const animatedAvataStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(
        Math.max(AVATAR_MAX_SIZE - scrollY.value / 10, AVATAR_MIN_SIZE)
      ),
      height: withTiming(
        Math.max(AVATAR_MAX_SIZE - scrollY.value / 10, AVATAR_MIN_SIZE)
      ),
      opacity: withTiming(scrollY.value > 220 ? 0 : 1),
    };
  });
  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      fontSize: withTiming(Math.max(SIZE_MAX - scrollY.value / 10, SIZE_Min)),
      opacity: withTiming(scrollY.value > 220 ? 0 : 1),
    };
  });
  return (
    <View>
      <Animated.View style={[styles.head, animatedHeaderStyle]}>
        <Animated.Image
          style={[animatedAvataStyle]}
          source={{ uri: "https://randomuser.me/api/portraits/men/41.jpg" }}
        ></Animated.Image>
        <Animated.Text style={[animatedTextStyle]}>
          Mornin' Mark! Ready for a quiz?
        </Animated.Text>
        <View style={[styles.menu]}>
          <Text style={[{ fontSize: 15 }]}>
            Popular
          </Text>
          <Text style={[{ fontSize: 15 }]}>
           Product Designs
          </Text>
          <Text style={[{ fontSize: 15 }]}>
            Deverlopment
          </Text>
        </View>
      </Animated.View>
      <View>
        <Text
          style={{
            fontSize: 20,
            color: "Black",
            fontWeight: "bold",
            padding: 10,
          }}
        >
          Popular Quizes
        </Text>
      </View>
      <ScrollView
        onScroll={(event) => {
          scrollY.value = event.nativeEvent.contentOffset.y;
        }}
        scrollEventThrottle={16}
      >
        <Animated.FlatList
          scrollEnabled={false}
          data={list}
          renderItem={({ item }) => (
            <View style={[styles.container]}>
              <Text>Long</Text>
              <Text>Design System</Text>
            </View>
          )}
        ></Animated.FlatList>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 100,
    backgroundColor: "#4CAF50",
    marginVertical: 10,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginTop: 10,
  },
  head: {
    backgroundColor: "green",
    justifyContent: "center"
  },
  menu: {
    position: 'absolute',
    bottom: 10,
    flexDirection: "row",
    justifyContent: "space-evenly" ,
    width: "100%"
  }
});
