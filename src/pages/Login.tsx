import React from "react";
import { TextInput, View, ImageBackground } from "react-native";
import { StyleSheet, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {useState} from "react";

export function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navegar = useNavigation()
    
    return(
        <View style={styles.container}>
            <ImageBackground  style={styles.image} source={require('../../img/login.png')}>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Email:"
                        placeholderTextColor="#003f5c"
                        onChangeText={(email) => setEmail(email)}
                    />
                </View>
                    
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Senha:"
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>

                <View style={styles.enviar}>
                    <Pressable style={styles.loginBtn} onPress={() => navegar.navigate('Menu')} >
                        <Text style={styles.text}>AUTENTICAR</Text>
                    </Pressable>
                </View>
            </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
    },
    image:{

        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    inputView: {
        marginBottom: 10,
        backgroundColor: "orange",
        borderRadius: 30,
        width: "70%",
        height: 45,
        alignItems: "flex-start",
      },
        text: {
            fontSize: 25,
            lineHeight: 25,
            color: 'white',
        },
        
      TextInput: {
          
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },
      loginBtn: {
        width: 250,
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      },
      enviar:{
        marginBottom: -450,
      }

})
export default Login;