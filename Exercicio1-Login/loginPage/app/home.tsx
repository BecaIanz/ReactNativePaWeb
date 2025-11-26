
import { Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import {useState, useEffect} from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from '../firebaseConfig'
import { Link, router } from 'expo-router';
import { setUserId } from 'firebase/analytics';
import {db } from "../firebaseConfig"
import { addDoc, collection, getDoc, query, serverTimestamp } from 'firebase/firestore';


export default function HomeScreen() {

const [title, setTitle] = useState("")
const [genre, setGenre] = useState("")
const [director, setDirector] = useState("")
const [country, setCountry] = useState("")
const [filmOrSerie, setfilmOrSerie] = useState("")
const [numOfEps, setNumOfEps] = useState("")
const [duration, setDuration] = useState("")   

async function register() {
    try{
        const auth = getAuth()
        const user = auth.currentUser

        if(!title || !genre || !director || !country){
            console.log("tem que cadastrar algo")
            return
        }

        const movies_series = {
            title,
            genre,
            director,
            country,
            filmOrSerie,
            numOfEps,
            duration,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
        }
        if(filmOrSerie.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") == "serie"){
            await addDoc(collection(db, "series"), movies_series)
            console.log("deu")
        }
        else if(filmOrSerie.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") == "filme"){
            await addDoc(collection(db, "movies"), movies_series)
            console.log("deu")
        }
    }
    catch{

    }
}



return (
    <View style={styles.container }>
    <View style={styles.nav}>
        <Text style={styles.text}>Filmes/Séries!</Text>
    </View>
    <View style={styles.body}>
        <Text >Deseja cadastrar um filme ou serie?</Text>
        <TextInput placeholder='Filme ou Série?' style={styles.input} onChangeText={(value) => setfilmOrSerie(value)}></TextInput>
        {
            filmOrSerie.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") == "serie" ? 
                (<TextInput placeholder='Quantidade de Episódios' style={styles.input} onChangeText={(value) => setNumOfEps(value)}></TextInput>) : ""  
        }
        {
            filmOrSerie.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") == "filme" ? 
                (<TextInput placeholder='Duração' style={styles.input} onChangeText={(value) => setDuration(value)}></TextInput>) : ""  
        }
        <TextInput placeholder='Título' style={styles.input} onChangeText={(value) => setTitle(value)}></TextInput>
        <TextInput placeholder='Genero' style={styles.input} onChangeText={(value) => setGenre(value)}></TextInput>
        <TextInput placeholder='Direção' style={styles.input} onChangeText={(value) => setDirector(value)}></TextInput>
        <TextInput placeholder='Pais de Origem' style={styles.input} onChangeText={(value) => setCountry(value)}></TextInput>
        <TouchableOpacity onPress={register} style={styles.button}>
            <Text style={styles.textbutton}>Cadastrar</Text>
        </TouchableOpacity>
        <Link style={styles.textbutton2} href={'/moviesList'}>Ver List de Filmes</Link>
        <Link style={styles.textbutton2} href={'/login'}>Sair</Link>

        

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