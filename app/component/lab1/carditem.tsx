import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const CardItem = ({
  location,
  time,
  transport,
  image,
  button,
  name,
  timeopen,
}: {
  location: any;
  time: any;
  transport: any;
  image: any;
  button: any;
  name: any;
  timeopen: any;
}) => {
  return (
    <View style={styles.card}>
      {location && (
        <>
          <Text style={styles.label}>Địa điểm</Text>
          <Text style={styles.text}>{location}</Text>
        </>
      )}
      {name && (
        <View>
          <Text style={styles.label}>Tên khách sạn</Text>
          <Text style={styles.text}>{name}</Text>
        </View>
      )}

      {time && (
        <>
          <Text style={styles.label}>Thời gian</Text>
          <Text style={styles.text}>{time}</Text>
        </>
      )}
      {timeopen && (
        <>
          <Text style={styles.label}>Thời gian mở cửa</Text>
          <Text style={styles.text}>{timeopen}</Text>
        </>
      )}

      {transport && (
        <>
          <Text style={styles.label}>Phương tiện di chuyển</Text>
          <Text style={styles.text}>{transport}</Text>
        </>
      )}

      {image && (
        <View>
          <Text style={styles.label}>Hình ảnh</Text>
          <Image source={image} style={styles.image} />
        </View>
      )}

      {button && (
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{button}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginVertical: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
    marginTop: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginTop: 10,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#3578e5',
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CardItem;
