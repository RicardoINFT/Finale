import { Button, View, Text, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const RegisterScreen = ({ navigation }) => {

  const [pUser, setpUser] = useState('');
  const [pText, setpText] = useState('');
  const [pPassword, setpPassword] = useState('');
  const [ptipo, setptipo] = useState('')
  
  const Register = () =>
  {
    if(ptipo === "123")
    {auth()
      .createUserWithEmailAndPassword(pText, pPassword)
      .then(() => {
        console.log('Conta Criada');
        firestore()
        .collection('testeid')
        .doc(pText)
        .set({
          username: "admin",
          email: pText,
        })
        .then(() => {
          navigation.replace('Login')  
        });
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          alert("Email já existe");
        }
        if (error.code === 'auth/invalid-email') {
          alert("Email Invalido");
        }
      });}
    else{
      auth()
      .createUserWithEmailAndPassword(pText, pPassword)
      .then(() => {
        console.log('Conta Criada');
        firestore()
        .collection('testeid')
        .doc(pText)
        .set({
          username: pUser,
          email: pText,
        })
        .then(() => {
          navigation.replace('Login')  
        });
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          alert("Email já existe");
        }
        if (error.code === 'auth/invalid-email') {
          alert("Email Invalido");
        }
      });
    }
  }
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
    
    <View>
      <View style={{padding:50}}> 
      <Text style={{paddingVertical:1,
      fontSize:50,color:'white'}}>Criação</Text>
      <Text style={{paddingVertical:10,
      fontSize:50,color:'orange'}}>Conta</Text>
    </View>
    <View style={{alignItems:'center',paddingVertical:10}}>
    <TextInput
    style={{ height: 40, 
      width: "70%", 
      borderColor: 'white', 
      borderWidth: 1,  
      marginBottom: 20,
      borderRadius:20,
      alignItems:'center',
      color:"white"}}
      textAlign={"center"}
      placeholderTextColor='white'
      value={pUser}
      placeholder="Username"
      onChangeText={text => setpUser(text)}
    />

    <TextInput style={{ height: 40, 
      width: "70%", 
      borderColor: 'orange', 
      borderWidth: 1,  
      marginBottom: 20,
      borderRadius:20,
      alignItems:'center',
      color:"orange"}}
      textAlign={"center"}
      placeholderTextColor='orange'
      value={pText}
      placeholder="Email"
      onChangeText={text => setpText(text)}
    />

    <TextInput style={{ height: 40, 
      width: "70%", 
      borderColor: 'white', 
      borderWidth: 1,  
      marginBottom: 20,
      borderRadius:20,
      alignItems:'center',
      color:"white"}}
      textAlign={"center"}
      placeholderTextColor='white'
      value={pPassword}
      placeholder="Password"
      onChangeText={text => setpPassword(text)}
    />
    <TextInput style={{ height: 40, 
      width: "70%", 
      borderColor: 'orange', 
      borderWidth: 1,  
      marginBottom: 20,
      borderRadius:20,
      alignItems:'center',
      color:"orange"}}
      textAlign={"center"}
      placeholderTextColor='orange'
      value={ptipo}
      placeholder="Codigo admin"
      onChangeText={text => setptipo(text)}
    />
    

    
    <View style={styles.container}>
  <View style={styles.button}>
  <Button
  color='rgba(52, 52, 52, 0.8)'
      title="<------"
      onPress={() => navigation.replace('Login')}
    />
  
   </View>
    <View style={styles.button}>
    <Button
    color="orange"  
      title="Registar"
      onPress={Register}
    />
    </View>
    
  </View>
  </View> 
</View>
  );
};

export default RegisterScreen;