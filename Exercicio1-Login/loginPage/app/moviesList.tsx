
import { Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';
import {useState, useEffect} from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from '../firebaseConfig'
import { Link, router } from 'expo-router';
import { setUserId } from 'firebase/analytics';
import {db } from "../firebaseConfig"
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, serverTimestamp, updateDoc } from 'firebase/firestore';


export default function MoviesList() {
    const [movies, setMovies] = useState<any[]>([])

    async function fetch_movies(){
        try{
            const q = query(collection(db, "movies"));
            const snapshot = await getDocs(q)
    
            const list = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
    
            setMovies(list) 
        }   
        catch (err) {
            console.log("Erro ao buscar veículos:", err);
        } 
    }
    async function updateMovie(id: string, data: any){
        try {
            const ref = doc(db, "movies", id);
            await updateDoc(ref, data);

            alert("Filme atualizado!");
            fetch_movies();

        } catch (err) {
            console.log("Erro ao atualizar:", err);
        }
    }

    async function deleteVehicle(id: string) {
    try {
      const ref = doc(db, "movies", id);
      await deleteDoc(ref);

      alert("Filme deletado!");
      fetch_movies();

    } catch (err) {
      console.log("Erro ao deletar:", err);
    }
  }

    useEffect(() => {
        fetch_movies();
    }, []);

    if (movies.length === 0) {
        return (
        <View style={{ padding: 20 }}>
            <Text>Nenhum filme encontrado.</Text>
        </View>
        );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Filmes</Text>
        
        <FlatList
            data={movies}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
            <View
                style={{
                    width: "75%",
                    backgroundColor: "#EFE4F7",
                    padding: 16,
                    borderRadius: 12,
                    marginBottom: 15,
                    elevation: 3,
                    display: "flex",
                    alignItems:"center",
                    justifyContent: "center",
                }}
            >
                <Text
                    style={{
                        color: "rebeccapurple",
                        fontSize: 23
                    }}
                >
                {item.title}
                </Text>
                <Text style={{ opacity: 0.7 }}>Genero: {item.genre}</Text>
                <Text style={{ opacity: 0.7 }}>Duração: {item.duration}</Text>
                <Text style={{ opacity: 0.7 }}>País de Origem: {item.country}</Text>
                <Text style={{ opacity: 0.7 }}>Diretor: {item.director}</Text>

                <View style={{ flexDirection: "row", marginTop: 12, gap: 12 }}>
                
                 <TouchableOpacity
                    style={{
                    backgroundColor: "#3498db",
                    paddingVertical: 8,
                    paddingHorizontal: 14,
                    borderRadius: 8,
                    }}
                    onPress={() =>
                    updateMovie(item.id, { brand: "Atualizado" })
                    }
                >
                    <Text style={{ color: "#fff", fontWeight: "600" }}>Editar</Text>
                </TouchableOpacity>

                 <TouchableOpacity
                    style={{
                    backgroundColor: "#e74c3c",
                    paddingVertical: 8,
                    paddingHorizontal: 14,
                    borderRadius: 8,
                    }}
                    onPress={() => deleteVehicle(item.id)}
                >
                    <Text style={{ color: "#fff", fontWeight: "600" }}>Excluir</Text>
                </TouchableOpacity>
                </View>
            </View>
            )}
        />
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