   
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
        
    }
    
     useEffect(() => {
       console.log(email, password)
     },[email,password])
    return (
        <View style={styles.container }>
        <View style={styles.nav}>
            <Text style={styles.text}>Home!</Text>
        </View>
        <View style={styles.body}>

            

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