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
            style={{flex: 1, paddingVertical: 50, paddingHorizontal: 15}}
        >   
            <Text style={{textTransform: "uppercase", fontSize: 30, fontWeight: "700", paddingHorizontal: 20, marginTop: 40}}>LOGIN</Text>
            <View style={{width: '100%', marginTop: 80}}>

                <View style={{borderWidth: 1, borderColor: "#fff", backgroundColor: "rgba(0,0,0,0.1)"
                , position: "relative", marginBottom: 15}}>
                    <Image source={require("../../../assets/avatar_user.png")}
                        style={{position: "absolute", left: 12, height: "100%", width: 32}}
                        resizeMode='contain'
                    />
                    <TextInput placeholder='Name' style={{fontSize: 18, fontWeight: "500", paddingVertical: 14, paddingLeft: 60}}
                        value={username}
                        onChangeText={text => setUsername(text)}
                    />
                </View>

                <View style={{borderWidth: 1, borderColor: "#fff", backgroundColor: "rgba(0,0,0,0.1)"
                , position: "relative", marginBottom: 15, flexDirection: "row", "alignItems": "center"}}>
                    <Image source={require("../../../assets/lock-152879.png")}
                        style={{position: "absolute", left: 12, height: "100%", width: 32}}
                        resizeMode='contain'
                    />
                    <TextInput placeholder='Password' style={{fontSize: 18, fontWeight: "500"
                    , paddingVertical: 14, paddingLeft: 60}} secureTextEntry={!showPassword}
                        value={password}
                        
                        onChangeText={text => setPassword(text)}
                    />
                    {
                        !showPassword
                        ? 
                        <Pressable style={{position: "absolute", right: 12, width: 32, height:32}}
                        onPress={()=> setShowPassword(true)}
                        >
                            <Image source={require("../../../assets/Eye.png")}
                            style={{height: "100%", width: 32}}
                                resizeMode='contain'
                            />
                        </Pressable>
                        : <Text></Text>
                    }
                    {
                        showPassword
                        ? 
                        <Pressable style={{position: "absolute", 
                            right: 12, height:"100%", width:32, height: 32}}
                            onPress={()=>setShowPassword(false)}
                            >
                            <Entypo name="eye-with-line" size={34} color="black"/>
                        </Pressable>
                        : <Text></Text>
                    }
                </View>
            </View>

            <Pressable width="100%" style={{marginTop: 50}}
                onPress={handleLogin}
            >

                <Text style={{textAlign: "center", backgroundColor: "#000", color: "#fff", paddingVertical: 10
                , fontSize: 20, fontWeight: "700"}}>LOGIN</Text>
            </Pressable>
            <Pressable style={{marginTop:40}}>
                <Text style={{textTransform: "uppercase", textAlign: "center", fontSize: 20, fontWeight: "700"}}>Forgot your password?</Text>
            </Pressable>
        </LinearGradient>
    </SafeAreaView>
  )
}