import { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Audio } from "expo-av";
const playList = [
  {
    id: "1",
    title: "Để em rời xa",
    artist: "Hoàn Tôn",
    uri: require("./DeEmRoiXa-HoangTon-2759506.mp3"),
  },
  {
    id: "2",
    title: "Anh sợ yêu",
    artist: "Anh Quân idol",
    uri: require("./AnhSoYeu-AnhQuanIdol-6351638.mp3"),
  },
  {
    id: "3",
    title: "Địa đàng",
    artist: "Nguyên Hà",
    uri: require("./32akx9wy00.mp3"),
  },
  {
    id: "4",
    title: "Có anh ở đây rồi",
    artist: "Anh QUân Idol",
    uri: require("./CoAnhODayRoi-AnhQuanIdol-3143464.mp3"),
  },
  {
    id: "5",
    title: "Sự nghiệp chướng",
    artist: "Pháo",
    uri: require("./sunghiepchuong.mp3"),
  },
];

export default function Bai3() {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [playing, setPlaying] = useState(false);
  const [curentTrack, setCurentTrack] = useState(0);

  const playTrack = async (index: number) => {
    try {
      const { sound: newSound } = await Audio.Sound.createAsync(
        playList[index].uri ,
        { shouldPlay: true }
      );
      setSound(newSound);
      setPlaying(true);
      setCurentTrack(index);
    } catch (error) {console.log(error);
    }
  };

  const stopTrack = async () => {
    if (sound) {
      await sound.pauseAsync();
      setPlaying(false);
    }
  };

  const nextTrack = async () => {
    const next = (curentTrack + 1) % playList.length;
    playTrack(next);
  };

  const prevTrack = async () => {
    const prev = (curentTrack - 1 + playList.length) % playList.length;
    playTrack(prev);
  };

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Danh sách phát nhạc</Text>

      <FlatList
        data={playList}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[
              styles.trackItem,
              curentTrack === index ? styles.activeTrack : null,
            ]}
            onPress={() => playTrack(index)}
          >
            <Text style={styles.trackTitle}>{item.title}</Text>
            <Text style={styles.trackArtist}>{item.artist}</Text>
          </TouchableOpacity>
        )}
      />

      <View style={styles.controls}>
        <Button title="Trước" onPress={prevTrack} />
        <Button
          title={playing ? "Dừng" : "Phát"}
          onPress={playing ? stopTrack : () => playTrack(curentTrack)}
        />
        <Button title="Tiếp" onPress={nextTrack} />
      </View>
    </View>
  );
}

// **🎨 Styles**
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  trackItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  activeTrack: {
    backgroundColor: "#d1e7fd",
  },
  trackTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  trackArtist: {
    fontSize: 14,
    color: "gray",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
});
