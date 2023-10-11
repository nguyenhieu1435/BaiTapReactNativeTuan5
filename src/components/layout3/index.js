import { View, Text, TextInput, Pressable } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native'
import {styles} from "./style"
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

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
    <View style={{flex: 1}}>
        <StatusBar style="auto" />
        <SafeAreaView style={styles.container}>
            <LinearGradient
                colors={["#3b3b98", "#c4c4c4"]}
                style={{flex: 1, padding: 20}}
            >
                <View style={{flex: 1, backgroundColor: "#23235b"
                , borderRadius: 12, paddingHorizontal: 14, paddingTop: 35, paddingBottom:20}}>
                    <View style={{alignItems: "center"}}>
                        <Text style={{color: "#fff", fontSize: 25, textAlign: "center"
                        , width: "50%"}}>PASSWORD GENERATOR</Text>
                    </View>

                    <TextInput 
                        style={{marginTop: 40, backgroundColor: "#151537"
                        , width: "100%", paddingHorizontal: 15, paddingVertical: 18, color: "#fff", fontSize: 18}}
                        value={password}
                        onChangeText={handleChangePassword}
                    />
                    <View style={{width: "100%", marginTop: 60}}>
                        <View style={{marginBottom: 35, flexDirection: "row",justifyContent: "space-between", alignItems: "center"}}>
                            <Text style={{color: "#fff", fontSize: 20}}>Password length </Text>
                            <TextInput style={{width: "40%", backgroundColor: "#fff"
                            , height: "100%", paddingVertical: 8, textAlign: "center", fontSize: 16, color: "#000"}}
                                value={passwordLength.toString()}
                                editable={false}
                            />
                        </View>
                        <View style={{marginBottom: 35, flexDirection: "row",justifyContent: "space-between", alignItems: "center"}}>
                            <Text style={{color: "#fff", fontSize: 20}}>Include lower case letters</Text>
                            <CheckCustom styles={{width: 25, height: 25, backgroundColor: "#fff"}}
                                value={isLowwerCase}
                            
                            />
                        </View>
                        <View style={{marginBottom: 35, flexDirection: "row",justifyContent: "space-between", alignItems: "center"}}>
                            <Text style={{color: "#fff", fontSize: 20}}>Include uppercase letters</Text>
                            <CheckCustom styles={{width: 25, height: 25, backgroundColor: "#fff"}}
                                value={isUpperCase}
                            
                            />
                        </View>
                        <View style={{marginBottom: 35, flexDirection: "row",justifyContent: "space-between", alignItems: "center"}}>
                            <Text style={{color: "#fff", fontSize: 20}}>Include number</Text>
                            <CheckCustom styles={{width: 25, height: 25, backgroundColor: "#fff"}}
                                value={isNumber}
                            
                            />
                        </View>
                        <View style={{marginBottom: 35, flexDirection: "row",justifyContent: "space-between", alignItems: "center"}}>
                            <Text style={{color: "#fff", fontSize: 20}}>Include special symbol</Text>
                            <CheckCustom styles={{width: 25, height: 25, backgroundColor: "#fff"}}
                                value={isSymbol}
                            
                            />
                        </View>

                    </View>

                    <Pressable style={{marginHorizontal: 8, marginTop: 20}}>
                        <Text style={{color:"#FFF", fontSize: 18, textAlign: "center", backgroundColor: "#3b3b98"
                    , paddingVertical: 16, fontWeight: "700"}}>
                            GENERATE PASSWORD
                        </Text>
                    </Pressable>
                </View> 

            </LinearGradient>
        
        </SafeAreaView>
    </View>
  )
}