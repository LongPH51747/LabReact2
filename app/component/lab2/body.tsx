import { Button, Text, TextInput, ToastAndroid, View } from "react-native";
import { UserType } from "./main";
import { FC, memo, useState } from "react";
type BodyType = {
    onUpdateInfor: (user: UserType) => void
    onClickChangeBgFooter: () => void
}
export const Body: FC<BodyType>=memo(props=>{
    const {onUpdateInfor, onClickChangeBgFooter} = props;
    const [name, setName] = useState('')
    const [linkAvata, setLinkAvata] = useState('')
    const handleChangeInfor = () => {
        if(name.length >0 && linkAvata.length>0) {
            onUpdateInfor({name: name, avatar: linkAvata});
        }
        else {
            ToastAndroid.show("không được để trống",ToastAndroid.SHORT);
        }
    }
    return(
        <View>
            <TextInput placeholder="Name" onChangeText={(text)=>setName(text)}></TextInput>
            <TextInput placeholder="Link Avata" onChangeText={(text)=>setLinkAvata(text)}></TextInput>
            <Button title="update infor" onPress={()=>handleChangeInfor()}></Button>
            <Button title="change footer color" onPress={()=>onClickChangeBgFooter()}></Button>
        </View>
    )
})

export default Body