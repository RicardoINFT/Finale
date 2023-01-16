import { Button,Text, View, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';



const LoginScreen = ({ navigation }) => {

  function nomeuser(documentSnapshot){return documentSnapshot.get('username')}
  const [nome, setnome] = React.useState([]);

  const [pText, setpText] = useState('');
  const [pPassword, setpPassword] = useState('');


  const testelog = () => {
    auth()
    .signInWithEmailAndPassword(pText, pPassword)
    .then(userCredentials => {
    const user = userCredentials.user;
    lerNome()
    })
  }
  const lerNome = () => {
    firestore()
    .collection('testeid')
    .doc(pText)
    .get()
    .then(documentSnapshot => nomeuser(documentSnapshot))
    .then(feito => {
      const nome = []
      nome.push(feito);
      setnome(nome);
      console.log(nome)
      if(nome[0] === "admin"){
        navigation.replace("Turnos")
      }
      else{navigation.replace("UserNormal")}
    })
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    button: {
      padding:10,
      width: '40%',
      borderRadius:20,
      height: 100
    }
  });

  return (
    <View >
    <View style={{padding:50}}> 
      <Text style={{paddingVertical:1,
      fontSize:50,color:'white'}}>SHIFTER</Text>
      <Text style={{paddingVertical:10,
      fontSize:50,color:'orange'}}>App</Text>
    </View>
  <View style={{alignItems:'center',paddingVertical:10}}> 
  <TextInput style={{ height: 40, 
  width: "70%", 
  borderColor: 'orange', 
  borderWidth: 1,  
  marginBottom: 20,
  borderRadius:20,
  alignItems:'center',
  color:"orange"}}
    textAlign={"center"}
    value={pText}
    placeholder="Email"
    onChangeText={text => setpText(text)}
    placeholderTextColor="orange"
  />

  <TextInput
  style={{ height: 40, 
    width: "70%", 
    borderColor: 'white', 
    borderWidth: 1,  
    marginBottom: 20,
    borderRadius:20,
    alignItems:'center',
    color:"white"}}
    placeholderTextColor="white"
    textAlign={"center"}
    value={pPassword}
    placeholder="Password"
    onChangeText={text => setpPassword(text)}
    
  />
  
  <View style={styles.container}>
  <View style={styles.button}>
      <Button
      style={{textDecoration: 'white',}}
      color='rgba(52, 52, 52, 0.8)'
        title="Registar Conta"
        onPress={() => navigation.replace('Register')}
       />
   </View>
    <View style={styles.button}>
      <Button      
      style={{}}
        color="orange"      
        title="------>"
        onPress={testelog}
      />
    </View>
    
  </View>
  </View> 
</View>

    );

};

export default LoginScreen;