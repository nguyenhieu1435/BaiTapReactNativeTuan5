import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import { View, Text, Pressable, Image, TextInput, SafeAreaView, Alert } from 'react-native'
import { Entypo } from '@expo/vector-icons';

const users = [
    {
        username: "admin",
        password: "admin"
    },
    {
        username: "hieunguyen",
        password: "123456"
    },
    {
        username: "user",
        password: "123456"
    }
]

export default function Layout1() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const handleLogin = ()=>{
        const result = users.some(user=>{
            return user.username === username && user.password === password;
        })
        if (result){
            Alert.alert("Login successfull!")
        } else {
            Alert.alert("Login failed")
        }
    }

  return (
    <SafeAreaView style={{flex: 1}}>
        <LinearGradient
            colors={["#FBCB00", "#BF9A00"]}
            style={{flex: 1, paddingVertical: "50px", paddingHorizontal: "15px"}}
        >   
            <Text style={{textTransform: "uppercase", fontSize: "30px", fontWeight: "700", paddingHorizontal: "20px"}}>LOGIN</Text>
            <View style={{width: "100%", marginTop: "80px"}}>'
                <View style={{borderWidth: "1px", borderColor: "#fff", backgroundColor: "rgba(0,0,0,0.1)"
                , position: "relative", marginBottom: "15px"}}>
                    <Image source={require("../../../assets/avatar_user.png")}
                        style={{position: "absolute", left: "12px", height: "100%", width: "32px"}}
                        resizeMode='contain'
                    />
                    <TextInput placeholder='Name' style={{fontSize: "18px", fontWeight: "500", outline: "none"
                    ,padding: "", paddingVertical: "14px", paddingLeft: "60px"}}
                        value={username}
                        onChangeText={text => setUsername(text)}
                    />
                </View>
                <View style={{borderWidth: "1px", borderColor: "#fff", backgroundColor: "rgba(0,0,0,0.1)"
                , position: "relative", marginBottom: "15px", flexDirection: "row", "alignItems": "center"}}>
                    <Image source={require("../../../assets/lock-152879.png")}
                        style={{position: "absolute", left: "12px", height: "100%", width: "32px"}}
                        resizeMode='contain'
                    />
                    <TextInput placeholder='Password' style={{fontSize: "18px", fontWeight: "500", outline: "none"
                    ,padding: "", paddingVertical: "14px", paddingLeft: "60px"}} secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={text => setPassword(text)}
                    />
                    {
                        !showPassword
                        ? 
                        <Pressable style={{position: "absolute", right: "12px", width: "32px", height:"32px"}}
                        onPress={()=> setShowPassword(true)}
                        >
                            <Image source={require("../../../assets/Eye.png")}
                            style={{height: "100%", width: "32px"}}
                                resizeMode='contain'
                            />
                        </Pressable>
                        : <></>
                    }
                    {
                        showPassword
                        ? 
                        <Pressable style={{position: "absolute", 
                            right: "12px", height:"100%", width:"32px", height: "32px"}}
                        onPress={()=>setShowPassword(false)}
                            >
                            <Entypo name="eye-with-line" size={34} color="black"/>
                        </Pressable>
                        : <></>
                    }
                </View>
            </View>

            <Pressable width="100%" style={{marginTop: "50px"}}
                onPress={handleLogin}
            >

                <Text style={{textAlign: "center", backgroundColor: "#000", color: "#fff", paddingVertical: "10px"
                , fontSize: "20px", fontWeight: "700"}}>LOGIN</Text>
            </Pressable>
            <Pressable style={{marginTop:"40px"}}>
                <Text style={{textTransform: "uppercase", textAlign: "center", fontSize: "20px", fontWeight: "700"}}>CREATE ACCOUNT</Text>
            </Pressable>
        </LinearGradient>
    </SafeAreaView>
  )
}