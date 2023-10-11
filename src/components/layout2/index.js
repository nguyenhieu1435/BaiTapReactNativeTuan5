import { View, Text, SafeAreaView, Image, TextInput, Pressable, StatusBar } from 'react-native'
import {styles} from "./style"
import { Entypo } from '@expo/vector-icons';

export default function Layout2() {
  return (
    <>
    <StatusBar style="auto" />
    
    <SafeAreaView style={styles.container}>
        <View style={{flex: 1, padding:20}}>
            <View style={styles.containerHeaderUsb}>
                <Image source={require("../../../assets/usb.png")}
                    resizeMode='contain'
                    style={styles.imageUsb}
                />
                <Text style={{fontSize: 16, fontWeight: "700", flexShrink: 1}}>
                        USB Bluetooth Music Receiver HJX-001
                        - Biến loa thường thành loa bluetooth
                </Text>
            </View>
            <View style={{marginBottom: "30", paddingHorizontal: "10"}}>
                <Text style={{textAlign: "center", fontWeight: "700", fontSize: 18, marginBottom: "15"}}>Cực kỳ hài lòng</Text>
                <View style={{flexDirection: "row", justifyContent:"center", gap: 20, marginVertical: 25}}>
                    <Entypo name="star" size={39} color="#F2DD1B" />
                    <Entypo name="star" size={39} color="#F2DD1B" />
                    <Entypo name="star" size={39} color="#F2DD1B"/>
                    <Entypo name="star" size={39} color="#F2DD1B"/>
                    <Entypo name="star" size={39} color="#F2DD1B"/>
                </View>
            </View>
            <View style={{borderWidth: 1, borderRadius:8, borderColor: "#1511eb", paddingVertical: 18,justifyContent: "center", alignItems: "center", flexDirection: "row"}}>
                <Image source={require("../../../assets/camera.png")}
                    resizeMode='contain' style={{width: 39, height: 39, marginHorizontal: 10}}   
                />

                <Text style={{fontSize: 18, fontWeight:"700"}}>Thêm hình ảnh</Text>
            </View>
            <View style={{position: "relative",marginTop: 15, padding: 15
            , borderWidth: 1, borderColor: "#999", borderRadius: 10}}>
                <TextInput multiline={true} placeholder='Hãy chi sẻ những điều mà bạn thích về sản phẩm'
                    style={{fontSize: 18, fontWeight: "700", textAlignVertical: "top"}}
                    placeholderTextColor={"#C4C4C4"}
                    numberOfLines={10}
                />
                <Text style={{fontWeight: "bold",width:"100%" ,textAlign: "right"}} >https://meet.google.com/nsj-ojwi-xpp</Text>
            </View>
            <Pressable style={{marginTop: 30}}>
                <Text style={{color: "#fff", backgroundColor: "#0D5DB6"
                , fontSize: 20, fontWeight: "700", textAlign: "center", borderRadius: 8, paddingVertical: 12}}>Gửi</Text>
            </Pressable>
        </View>
      
    </SafeAreaView>
    </>
  )
}