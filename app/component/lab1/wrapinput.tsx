import { useState } from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';

const WrapTextInput = ({
  title,
  withColon,
  required,
  error,
  description,
  placeholder,
  isFocus,
  value, 
  onChangeText,
  ...rest
}: {
  title: any;
  withColon: any;
  required: any;
  error: any;
  description: any;
  placeholder: any
  isFocus: any;
  value: any 
  onChangeText: any
  rest: any;
}) => {
    const [forcus, setForcus] = useState(false)
  return (
    <View style={styles.container}>
      {/* Tiêu đề */}
      <Text style={styles.title}>
        {title} {required && <Text style={{color: 'red'}}>*</Text>}
      </Text>

      {/* Ô nhập liệu */}
      <View style={[styles.inputContainer, error && styles.errorBorder, forcus && {borderColor: 'blue'}]}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          onFocus={()=>{setForcus(true)}}
          onBlur={()=>setForcus(false)}
        />
        {(error&&!forcus) && (
          <Image
            source={require('../../../img/error.png')}
            style={styles.errorIcon}
          />
        )}
      </View>

      {/* Hiển thị lỗi nếu có */}
      {(error&&!forcus) && <Text style={styles.errorText}>{description}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  errorBorder: {
    borderColor: 'red',
  },
  errorIcon: {
    width: 20,
    height: 20,
    tintColor: 'red',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});

export default WrapTextInput;
