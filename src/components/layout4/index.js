import { View, Text, SafeAreaView, Pressable, TextInput, Image, StatusBar } from 'react-native'
import { AntDesign } from '@expo/vector-icons';


export default function Layout4() {
  return (
    <View style={{flex: 1, backgroundColor: "#fff", paddingHorizontal: 20, paddingTop: 20}}>
        <StatusBar style="auto" />
        <SafeAreaView style={{flex: 1, backgroundColor: "#c4c4c4", position: "relative"}}>
            <View style={{backgroundColor: "#FFf", padding: 15}}>
                <View style={{flexDirection: "row"}}>
                    <View style={{flex: 2}}> 
                        <Image source={require("../../../assets/book.png")}
                            resizeMode="contain"
                            style={{width: 118, height: 155}}
                        />
                    </View>
                    <View style={{flex: 3}}> 
                        <Text style={{fontSize: 12, fontWeight: "700", marginBottom: 10}}>Nguyên hàm tích phân và ứng dụng</Text>
                        <Text style={{fontSize: 12, fontWeight: "700", marginBottom: 10}}>Cung cấp bởi Tiki Trading</Text>
                        <Text style={{color: "#ee0d0d", fontSize: 18, fontWeight: "700"}}>141.800 đ</Text>
                        <Text style={{color: "#808080", fontSize: 12, marginTop: 8}}>141.800 đ</Text>
                        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 12}}>
                            <View style={{flexDirection: "row", alignItems: "center"}}>
                                <View
                                    style={{width: 20, height: 20, backgroundColor: "#c4c4c4", alignItems: "center", alignSelf:"center" ,justifyContent: "center"}}
                                >
                                    <AntDesign name="minus" size={14} color="black"/>
                                </View>
                            
                                <Text style={{fontSize: 17, fontWeight: "700", marginHorizontal: 9}}>1</Text>

                                <View
                                    style={{width: 20, height: 20, backgroundColor: "#c4c4c4", alignItems: "center", alignSelf:"center" ,justifyContent: "center"}}
                                >
                                    <AntDesign name="plus" size={14} color="black" />
                                </View>
                
                            </View>
                            <Pressable>
                                <Text style={{fontSize: 12, color: "#134FEC", fontWeight: "bold"}}>Mua sau</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection: "row", marginTop: 20}}>
                    <Text style={{fontSize: 12, fontWeight :"bold", marginRight: 20}}>Mã giảm giá đã lưu</Text>
                    <Pressable>
                        <Text style={{fontSize: 12, fontWeight: "bold", color: "#134FEC"}}>Xem tại đây</Text>
                    </Pressable>
                </View>
                <View style={{flexDirection: "row", marginTop: 32, alignItems: "center", justifyContent: "space-between"}}>
                    <View style={{flexDirection: "row", alignItems: "center", borderWidth: 1, flex: 3
                    , borderColor: "#888", padding: 12}}>
                        <View style={{backgroundColor: "#f2dd1b", width: 32, height: 16}}>

                        </View>
                        <TextInput placeholder="Mã giảm giá"
                            style={{fontSize: 18, marginLeft: 10, fontWeight: "bold", width: "100%"}}
                            placeholderTextColor={"#000"}
                        />
                    </View>
                    <Pressable style={{flex: 2, marginLeft: 23, paddingVertical: 13,backgroundColor: "#0A5EB7", justifyContent: "center"}}>
                        <Text
                            style={{fontSize: 20, color: "#fff", fontWeight: "bold",
                            textAlign: "center"
                            , width: "100%"}}
                        >Áp dụng</Text>
                    </Pressable>
                </View>
            </View>

            <View style={{marginTop: 15, padding: 15, flexDirection: "row", backgroundColor: "#fff"}}>
                <Text style={{fontSize: 12, fontWeight: "bold"}}>Bạn có phiều quà tặng Tiki/Got iot/ Ur box?</Text>
                <Text style={{fontSize: 12, color: "#134FEC", fontWeight: "bold", marginLeft: 8}}>Nhập tại đây?</Text>
            </View>
            <View style={{marginTop: 15, padding: 15, flexDirection: "row", backgroundColor: "#fff", justifyContent: "space-between"}}>
                <Text style={{fontSize: 18, fontWeight: "bold"}}>Tạm tính</Text>
                <Text style={{color: "#ee0d0d", fontSize: 18, fontWeight: "700"}}>141.800 đ</Text>
            </View>
            <View style={{marginTop: "auto", backgroundColor: "#fff", padding: 15}}>            
                <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 20}}>
                    <Text style={{fontSize :20, color: "#999", fontWeight :"500"}}>Thành tiền</Text>
                    <Text style={{color: "#ee0d0d", fontSize: 18, fontWeight: "700"}}>141.800 đ</Text>
                </View>
                <Pressable style={{width :"100%", backgroundColor: "#E53935", justifyContent: "center"}}>
                    <Text style={{textAlign: "center", color: "#fff", fontSize: 20, fontWeight: "500"
                    , paddingVertical: 7, borderRadius: 4}}>TIẾN HÀNH ĐẶT HÀNG</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    </View>
  )
}