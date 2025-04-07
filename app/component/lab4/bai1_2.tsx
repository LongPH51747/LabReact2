import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Alert, Button, Image, View } from "react-native";

export default function Bai1_2() {
  const [img, setImg] = useState('');
  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status != "granted") {
        Alert.alert("chưa cấp quyền truy cập ảnh");
      }
    })();
  }, []);
  useEffect(() => {
    async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status != "granted") {
        Alert.alert("Chưa cấp quyền truy cập camera");
      }
    };
  });

  const takeCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({ quality: 1 });
    if (!result.canceled) {
      setImg(result.assets[0].uri);
    }
  };
  const selectPhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({quality: 1})
    if (!result.canceled) {
        setImg(result.assets[0].uri)
    }
  };

  return (
    <View style={{height: '100%', alignItems: 'center'}}>
      <Image source={{uri: img}} style={{width: "100%", height: 250, margin: 20}}></Image>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: '50%', height: 50, position: 'absolute', bottom: 20}}>
        <Button title="Chọn ảnh" onPress={() => {selectPhoto()}}></Button>
        <Button title="Chụp ảnh" onPress={() => {takeCamera()}}></Button>
      </View>
    </View>
  );
}
