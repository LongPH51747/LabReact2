import {FC, memo} from 'react';
import {Text, View, ViewStyle} from 'react-native';

type FooterType = {
  timUpdate: string;
  backgroundColor: string;
};

export const Footer: FC<FooterType> = memo(props => {
    const {timUpdate, backgroundColor} = props
  return (
    <View
    style={containerStyle({
        height: 100,
        backgroundColor: backgroundColor,
        alignItems: 'center',
        justifyContent: "center"
    })}>
      <Text style={{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20
      }}>Time to update information: {timUpdate}</Text>
    </View>
  );
});
const containerStyle = (props: ViewStyle) => ({
    ...props,
})
export default Footer