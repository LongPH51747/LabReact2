import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

export default function HeaderCustomer({
  title,
  iconLeft,
  iconRight,
  onPressRight,
  onPressLeft,
  centerComponent,
  rightComponent,
  leftComponent,
  iconLeftColor,
  iconRightColor,
  leftIconSize,
  rightIconSize,
  numberOfLines,
  backgoundColor = 'red',
}: {
  title: any;
  iconLeft: any;
  iconRight: any;
  onPressRight: any;
  onPressLeft: any;
  centerComponent: any;
  rightComponent: any;
  leftComponent: any;
  iconLeftColor: any;
  iconRightColor: any;
  leftIconSize: any;
  rightIconSize: any;
  numberOfLines: any;
  backgoundColor: any;
}) {
  const renderLeft = () => {
    return (
      leftComponent || (
        <View>
          {iconLeft ? (
            <Pressable hitSlop={15}>
              <Image source={iconLeft} style={{width: leftIconSize, height: leftIconSize}} tintColor={iconLeftColor}></Image>
            </Pressable>
          ) : (
            <View style={{width: leftIconSize, height: leftIconSize}}></View>
          )}
        </View>
      )
    );
  };
  const renderRight = () => {
    return (
      rightComponent || (
        <View>
          {iconRight ? (
            <Pressable hitSlop={15} onPress={onPressRight}>
              <Image source={iconRight} style={{width: rightIconSize, height: rightIconSize}} tintColor={iconRightColor}></Image>
            </Pressable>
          ) : (
            <View style={{width: rightIconSize, height: rightIconSize}}></View>
          )}
        </View>
      )
    );
  };
  const renderCenter = () => {
    return (
      centerComponent || (
        <View style={styles.containerCenter}>
          <Text style={styles.title} numberOfLines={numberOfLines}>
            {title}
          </Text>
        </View>
      )
    );
  };
  return (
    <View style={styles.container}>
      {renderLeft()}
      {renderCenter()}
      {renderRight()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  title: {
    fontSize: 20
  },
  containerCenter: {
    alignSelf: "center"
  }
});
