   
   import { Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
   import {useState, useEffect} from 'react';
   import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
   import { app } from '../firebaseConfig'
   import { Link, router } from 'expo-router';
   
   export default function HomeScreen() {
   
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const auth = getAuth(app)
    
    const singIn = async () => {
        await signInWithEmailAndPassword(auth, email, password)
        router.navigate('/home')
    
    }
    
     useEffect(() => {
       console.log(email, password)
     },[email,password])
    return (
        <View style={styles.container }>
        <View style={styles.nav}>
            <Text style={styles.text}>Welcome!</Text>
        </View>
        <View style={styles.body}>

            <TextInput placeholder='Email' style={styles.input} onChangeText={(value) => setEmail(value)}></TextInput>
            <TextInput secureTextEntry={true} placeholder='Senha' style={styles.input} onChangeText={(value) => setPassword(value)}></TextInput>
    
            <TouchableOpacity onPress={singIn} style={styles.button}>
            <Text style={styles.textbutton}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button2}>
            <Text style={styles.textbutton2}>Forgot Password?</Text>
            </TouchableOpacity>
            <Link style={styles.textbutton2} href={'/'}>Não possuo Conta</Link>

        </View>
        <View style={styles.final}>
            <TouchableOpacity style={styles.button2}>
            <Image  source={require("../assets/images/googlepequeno.png")}></Image>
            <Text style={{fontSize: 25, fontFamily: 'MyCustomFontName', color: " "}}>Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button3}>
            <Image  source={require("../assets/images/facebook40.png")}></Image>
            <Text style={{fontSize: 25, fontFamily: 'MyCustomFontName', color: " "}}>Facebook</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
    }

    const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor: "#EAD6FF", 
        justifyContent: "flex-start",
        gap : 20
    },
    nav:{
        width: "100%",
        height : "20%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"

    },
    body:{
        width: "100%",
        height : "40%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        gap : 20  
    },
    final:{
        width: "100%",
        height : "40%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        gap : 20,
        flexDirection: "column"
    },
    text : {
        color: "rebeccapurple",
        fontSize: 50,
        fontFamily: 'MyCustomFontName',
    },
    img : {
        width: "40%",
        height: "100%"
    },
    input: {
        backgroundColor: '#F5EBFF',
        width: 300,
        height: 45,
        borderRadius: 10,
        padding: 10,
        color: '#B4B1BD'
    },
    button : {
        backgroundColor: "rebeccapurple",
        width: 300,
        height: 45,
        borderRadius: 10,
        padding: 10,
        display:"flex",
        justifyContent:"center",
        alignItems: "center"
    },
    button2 : {
        width: 300,
        height: 20,
        display:"flex",
        justifyContent:"center",
        alignItems: "center",
        flexDirection: "row"
    },
    button3 : {
        width: 80,
        height: 20,
        display:"flex",
        justifyContent:"center",
        alignItems: "center",
        flexDirection: "row"
    },
    textbutton :{
        fontSize: 20,
        fontFamily: 'MyCustomFontName',
        color: "white"
    },
    textbutton2 :{
        fontSize: 15,
        fontFamily: 'MyCustomFontName',
        color: "rebeccapurple"
    }
    });