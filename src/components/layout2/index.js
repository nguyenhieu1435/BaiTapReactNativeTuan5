import { View, Text, SafeAreaView, Image, TextInput, Pressable } from 'react-native'
import {styles} from "./style"
import { Entypo } from '@expo/vector-icons';

export default function Layout2() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={{flex: 1, padding:"20px"}}>
            <View style={styles.containerHeaderUsb}>
                <Image source={require("../../../assets/usb.png")}
                    resizeMode='contain'
                    style={styles.imageUsb}
                />
                <Text style={{fontSize: "16px", fontWeight: "700"}}>
                    USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth
                </Text>
            </View>
            <View style={{marginBottom: "30px", paddingHorizontal: "10px"}}>
                <Text style={{textAlign: "center", fontWeight: "700", fontSize: "18px", marginBottom: "15px"}}>Cực kỳ hài lòng</Text>
                <View style={{flexDirection: "row", justifyContent:"center", rowGap:"55px"}}>
                    <Entypo name="star" size={39} color="#F2DD1B" />
                    <Entypo name="star" size={39} color="#F2DD1B" />
                    <Entypo name="star" size={39} color="#F2DD1B"/>
                    <Entypo name="star" size={39} color="#F2DD1B"/>
                    <Entypo name="star" size={39} color="#F2DD1B"/>
                </View>
            </View>
            <View style={{borderWidth: "1px", borderRadius:"8px", borderColor: "#1511eb", justifyContent: "center", alignItems: "center", flexDirection: "row"}}>
                <Image source={require("../../../assets/camera.png")}
                    resizeMode='contain' style={{width: "32px", height: "32px", marginHorizontal: "10px"}}
                  
                />

                <Text style={{paddingVertical:"20px", fontSize: "18px", fontWeight:"700"}}>Thêm hình ảnh</Text>
            </View>
            <View style={{position: "relative",marginTop: "15px", padding: "15px"
            , borderWidth: "1px", borderColor: "#999", borderRadius: "10px"}}>
                <TextInput multiline={true} placeholder='Hãy chi sẻ những điều mà bạn thích về sản phẩm'
                    style={{fontSize: "18px", fontWeight: "700", outline: "none"}}
                    placeholderTextColor={"#C4C4C4"}
                    numberOfLines={9}
                />
                <Text style={{fontWeight: "bold",width:"100%" ,textAlign: "right"}} >https://meet.google.com/nsj-ojwi-xpp</Text>
            </View>
            <Pressable style={{marginTop: "30px"}}>
                <Text style={{color: "#fff", backgroundColor: "#0D5DB6"
                , fontSize: "20px", fontWeight: "700", textAlign: "center", borderRadius: "8px", paddingVertical: "12px"}}>Gửi</Text>
            </Pressable>
        </View>
      
    </SafeAreaView>
  )
}