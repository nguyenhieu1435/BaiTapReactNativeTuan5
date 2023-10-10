import { View, Text, SafeAreaView, Pressable, TextInput, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';


export default function Layout4() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#c4c4c4", position: "relative"}}>
        <View style={{backgroundColor: "#FFf", padding: "15px"}}>
            <View style={{flexDirection: "row"}}>
                <View style={{flex: 2}}> 
                    <Image source={require("../../../assets/book.png")}
                        resizeMode="contain"
                        style={{width: "118px", height: "155px"}}
                    />
                </View>
                <View style={{flex: 3}}> 
                    <Text style={{fontSize: "12px", fontWeight: "700", marginBottom: "10px"}}>Nguyên hàm tích phân và ứng dụng</Text>
                    <Text style={{fontSize: "12px", fontWeight: "700", marginBottom: "10px"}}>Cung cấp bởi Tiki Trading</Text>
                    <Text style={{color: "#ee0d0d", fontSize: "18px", fontWeight: "700"}}>141.800 đ</Text>
                    <Text style={{color: "#808080", fontSize: "12px", marginTop: "8px"}}>141.800 đ</Text>
                    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: "12px"}}>
                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            <View
                                 style={{width: "20px", height: "20px", backgroundColor: "#c4c4c4", alignItems: "center", alignSelf:"center" ,justifyContent: "center"}}
                            >
                                <AntDesign name="minus" size={14} color="black"/>
                            </View>
                           
                            <Text style={{fontSize: "17px", fontWeight: "700", marginHorizontal: "9px"}}>1</Text>

                            <View
                                 style={{width: "20px", height: "20px", backgroundColor: "#c4c4c4", alignItems: "center", alignSelf:"center" ,justifyContent: "center"}}
                            >
                                 <AntDesign name="plus" size={14} color="black" />
                            </View>
            
                        </View>
                        <Pressable>
                            <Text style={{fontSize: "12px", color: "#134FEC", fontWeight: "bold"}}>Mua sau</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            <View style={{flexDirection: "row", marginTop: "20px"}}>
                <Text style={{fontSize: "12px", fontWeight :"bold", marginRight: "20px"}}>Mã giảm giá đã lưu</Text>
                <Pressable>
                    <Text style={{fontSize: "12px", fontWeight: "bold", color: "#134FEC"}}>Xem tại đây</Text>
                </Pressable>
            </View>
            <View style={{flexDirection: "row", marginTop: "32px", alignItems: "center", justifyContent: "space-between"}}>
                <View style={{flexDirection: "row", alignItems: "center", borderWidth: "1px", flex: 3
                , borderColor: "#888", padding: "12px"}}>
                    <View style={{backgroundColor: "#f2dd1b", width: "32px", height: "16px"}}>

                    </View>
                    <TextInput placeholder="Mã giảm giá"
                        style={{fontSize: "18px", marginLeft: "10px", fontWeight: "bold"}}
                    />
                </View>
                <Pressable style={{flex: 2, marginLeft: "23px", height: "100%", backgroundColor: "#0A5EB7", justifyContent: "center"}}>
                    <Text
                        style={{fontSize: "20px", color: "#fff", fontWeight: "bold",
                        textAlign: "center"
                        , width: "100%"}}
                    >Áp dụng</Text>
                </Pressable>
            </View>
        </View>

        <View style={{marginTop: "15px", padding: "15px", flexDirection: "row", backgroundColor: "#fff"}}>
            <Text style={{fontSize: "12px", fontWeight: "bold"}}>Bạn có phiều quà tặng Tiki/Got iot/ Ur box?</Text>
            <Text style={{fontSize: "12px", color: "#134FEC", fontWeight: "bold", marginLeft: "8px"}}>Nhập tại đây?</Text>
        </View>
        <View style={{marginTop: "15px", padding: "15px", flexDirection: "row", backgroundColor: "#fff", justifyContent: "space-between"}}>
            <Text style={{fontSize: "18px", fontWeight: "bold"}}>Tạm tính</Text>
            <Text style={{color: "#ee0d0d", fontSize: "18px", fontWeight: "700"}}>141.800 đ</Text>
        </View>
        <View style={{marginTop: "auto", backgroundColor: "#fff", padding: "15px"}}>            
            <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: "20px"}}>
                <Text style={{fontSize :"20px", color: "#999", fontWeight :"500"}}>Thành tiền</Text>
                <Text style={{color: "#ee0d0d", fontSize: "18px", fontWeight: "700"}}>141.800 đ</Text>
            </View>
            <Pressable style={{width :"100%", backgroundColor: "#E53935", justifyContent: "center"}}>
                <Text style={{textAlign: "center", color: "#fff", fontSize: "20px", fontWeight: "500"
                , paddingVertical: "7px", borderRadius: "4px"}}>TIẾN HÀNH ĐẶT HÀNG</Text>
            </Pressable>
        </View>
    </SafeAreaView>
  )
}