import {View} from 'react-native';
import HeaderCustomer from './headercustomer';

export default function Bai1() {
  return (
    <View>
      <HeaderCustomer
        title="Header"
        iconLeft={require('../../../img/back.png')}
        iconRight={require('../../../img/R.png')}
        iconLeftColor={null}
        iconRightColor={null}
        leftIconSize={20}
        rightIconSize={25}
        numberOfLines={2}
      />
      <HeaderCustomer
        title="Trang chur"
        iconLeft={require('../../../img/back.png')}
        iconRight={require('../../../img/R.png')}
        iconLeftColor={null}
        iconRightColor={null}
        leftIconSize={20}
        rightIconSize={25}
        numberOfLines={2}
      />
      <HeaderCustomer
        iconLeft={require('../../../img/back.png')}
        iconLeftColor={null}
        iconRightColor={null}
        leftIconSize={20}
        rightIconSize={20}
        numberOfLines={2}
      />
    </View>
  );
}
