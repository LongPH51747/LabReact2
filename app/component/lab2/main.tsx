import { View } from "react-native"
import Header from "./header"
import Body from "./body"
import Footer from "./footer"
import { useCallback, useEffect, useState } from "react"
const colors = ["red","white","green","orange","blue","gray"]
export type UserType = {
    name: string,
    avatar: string,
}

export default function Main(){
    const [user, setUser] = useState<UserType>({
        name: "No name",
        avatar: "https://th.bing.com/th/id/OIP.5X5mJHdAdVpngropYGuKVQHaHa?rs=1&pid=ImgDetMain"
    });
    const [lastTimeUpdate, setLastTimeUpdate] = useState("You haven't update your information")
    const [footerColor, setFooterColor] = useState(colors[0])
    //Hàm cập nhật thông tin
    const handleUpdateInfor = useCallback((_user: UserType)=>{
        setUser(_user)
    },[])
    //Hàm random color
    const handleRandomColor = useCallback(()=>{
        const numderran = Math.floor(Math.random()*colors.length)
        setFooterColor(colors[numderran])
    },[])

    useEffect(()=>{
        const currentupdate = new Date()
        const dateTime = 
        currentupdate.getDate()+
        '/'+
        (currentupdate.getMonth())+
        '/'+
        (currentupdate.getFullYear())+
        ' '+
        (currentupdate.getHours())+
        ' : '+
        (currentupdate.getMinutes())+
        ' : '+
        (currentupdate.getSeconds());
        setLastTimeUpdate(dateTime)
    },[user])
    return(
        <View>
            <Header user={user}></Header>
            <Body
            onUpdateInfor={handleUpdateInfor}
            onClickChangeBgFooter={handleRandomColor}></Body>
            <Footer timUpdate={lastTimeUpdate} backgroundColor={footerColor}></Footer>
        </View>
    )
}