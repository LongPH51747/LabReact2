import {View} from 'react-native';
import WrapTextInput from './wrapinput';
import { useState } from 'react';
export default function Bai3() {
    const [text, setText] = useState('')
    const [sdt, setSDT] = useState('')
    const [age, setAge] = useState('')
    const [forcus, setForcus] = useState(false)
   return (
    <View>
      <WrapTextInput
        title="Họ và tên"
        placeholder="Nhập họ và tên"
        required={true}
        error={text.length < 3}
        description="Tên phải có ít nhất 3 ký tự"
        value={text}
        onChangeText={setText}></WrapTextInput>
      <WrapTextInput
        title="SĐT"
        placeholder="Nhập số điện thoại"
        required={true}
        error={sdt.length < 10}
        description="SĐT phải có ít nhất 10 số"
        value={sdt}
        onChangeText={setSDT}></WrapTextInput>
      <WrapTextInput
        title="Tuổi"
        placeholder="Nhập số điện thoại"
        required={false}
        error={Number(age)<0 || Number(age)>200}
        description="Tuổi không thể nhỏ hơn 0 và lớn hơn 200"
        value={age}
        onChangeText={setAge}></WrapTextInput>
    </View>
  );
}
