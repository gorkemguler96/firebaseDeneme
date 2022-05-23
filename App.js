import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import {initializeApp} from 'firebase/app'
import {firebaseConfig} from "./firebase-config";

export default function App() {

    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)

  const signUp = () =>{
        createUserWithEmailAndPassword(auth,"denemelik@gmail.com","123123")
            .then(res => console.log("oluşturuldu"))
            .catch(err=>console.log("hata var"))
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title={"sign up"} onPress={signUp}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
