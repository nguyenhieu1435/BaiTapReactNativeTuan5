import { View, Text, TextInput, Pressable } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native'
import {styles} from "./style"
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react';

export function CheckCustom({styles, value}){
    return (
        <Pressable
            style={styles}
        >
            {value ?  <Entypo name="check" size={styles.width} color="black" /> : ""}
        </Pressable>
    )
}

export default function Layout3() {
    const [password, setPassword] = useState("")
    const [passwordLength, setPasswordLength] = useState(0)
    const [isLowwerCase, setIsLowwerCase] = useState(false)
    const [isUpperCase, setIsUpperCase] = useState(false)
    const [isNumber, setIsNumber] = useState(false)
    const [isSymbol, setIsSymbol] = useState(false)


    const handleChangePassword = (text) =>{
        setPassword(text)
        setPasswordLength(text.length)
        setIsLowwerCase(text.match(/[a-z]/) ? true : false)
        setIsUpperCase(text.match(/[A-Z]/) ? true : false)
        setIsNumber(text.match(/[0-9]/) ? true : false)
        setIsSymbol(text.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/) ? true : false)
    }
    return (
    <SafeAreaView style={styles.container}>
        <LinearGradient
            colors={["#3b3b98", "#c4c4c4"]}
            style={{flex: 1, padding: "20px"}}
        >
            <View style={{flex: 1, backgroundColor: "#23235b"
            , borderRadius: "12px", paddingHorizontal: "14px", paddingTop: "35px", paddingBottom:"20px"}}>
                <Text style={{color: "#fff", fontSize: "25px", textAlign: "center"
                , width: "50%", marginHorizontal: "auto"}}>PASSWORD GENERATOR</Text>

                <TextInput 
                    style={{marginTop: "40px",outline: "none", backgroundColor: "#151537"
                    , width: "100%", paddingHorizontal: "15px", paddingVertical: "18px", color: "#fff", fontSize: "18px"}}
                    value={password}
                    onChangeText={handleChangePassword}
                />
                <View style={{width: "100%", marginTop: "50px"}}>
                    <View style={{marginBottom: "25px", flexDirection: "row",justifyContent: "space-between", alignItems: "center"}}>
                        <Text style={{color: "#fff", fontSize: "20px"}}>Password length </Text>
                        <TextInput style={{width: "40%", backgroundColor: "#fff", height: "100%", paddingVertical: "8px", textAlign: "center", fontSize: "16px"}}
                            value={passwordLength.toString()}
                            editable={false}
                        />
                    </View>
                    <View style={{marginBottom: "25px", flexDirection: "row",justifyContent: "space-between", alignItems: "center"}}>
                        <Text style={{color: "#fff", fontSize: "20px"}}>Include lower case letters</Text>
                        <CheckCustom styles={{width: "25px", height: "25px", backgroundColor: "#fff"}}
                            value={isLowwerCase}
                           
                        />
                    </View>
                    <View style={{marginBottom: "25px", flexDirection: "row",justifyContent: "space-between", alignItems: "center"}}>
                        <Text style={{color: "#fff", fontSize: "20px"}}>Include uppercase letters</Text>
                        <CheckCustom styles={{width: "25px", height: "25px", backgroundColor: "#fff"}}
                            value={isUpperCase}
                          
                        />
                    </View>
                    <View style={{marginBottom: "25px", flexDirection: "row",justifyContent: "space-between", alignItems: "center"}}>
                        <Text style={{color: "#fff", fontSize: "20px"}}>Include number</Text>
                        <CheckCustom styles={{width: "25px", height: "25px", backgroundColor: "#fff"}}
                            value={isNumber}
                          
                        />
                    </View>
                    <View style={{marginBottom: "25px", flexDirection: "row",justifyContent: "space-between", alignItems: "center"}}>
                        <Text style={{color: "#fff", fontSize: "20px"}}>Include special symbol</Text>
                        <CheckCustom styles={{width: "25px", height: "25px", backgroundColor: "#fff"}}
                            value={isSymbol}
                          
                        />
                    </View>

                </View>

                <Pressable style={{marginHorizontal: "8px", marginTop: "20px"}}>
                    <Text style={{color:"#FFF", fontSize: "18px", textAlign: "center", backgroundColor: "#3b3b98"
                , paddingVertical: "16px", fontWeight: "700"}}>
                        GENERATE PASSWORD
                    </Text>
                </Pressable>
            </View> 

        </LinearGradient>
      
    </SafeAreaView>
  )
}