import { Button } from "react-native";
import { View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

export default function Bai1(){
    const col = useSharedValue(0)
    const row = useSharedValue(0)
    const animatedStyle = useAnimatedStyle(()=>{
        return {
            transform: [{translateY: col.value},{translateX: row.value}]
        }
    })
    return(
        <View>
            <Animated.View style={[{width: 50, height: 50, backgroundColor: "blue"}, animatedStyle]}></Animated.View>
            <Button title="move" onPress={()=>{col.value = withTiming(Math.random()*400+1); row.value = withTiming(Math.random()*400+1)}}></Button>
        </View>
    )
}