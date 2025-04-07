import {Image, Text, View} from 'react-native';
import {UserType} from './main';
import {FC, memo} from 'react';

type HeaderType = {
  user: UserType;
};

export const Header: FC<HeaderType> = memo(props => {
  console.log('re-render header');
  const {user} = props;
  return (
    <View
      style={{
        height: 100,
        backgroundColor: 'white',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Image
        resizeMode="center"
        style={{width: 100, height: 100}}
        onError={() => {
          console.log('lỗi tải ảnh');
        }}
        source={user.avatar?{uri: user.avatar} : require('../../../img/avatga.jpg')}></Image>
      <View>
        <Text>Welcome a new day</Text>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>{user.name}</Text>
      </View>
    </View>
  );
});

export default Header;
