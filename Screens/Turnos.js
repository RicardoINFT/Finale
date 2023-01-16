import React, { useState, useEffect, TextInput, StyleSheet } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import DatePicker from 'react-native-date-picker'
import { Card, Divider } from '@rneui/themed';
import { SelectList } from 'react-native-dropdown-select-list'


const TurnosScreen = ({navigation}) => {
  
  const logout = () => {
    navigation.replace("Login")
  }

  const [date, setDate] = useState(new Date())
  const [date2, setDate2] = useState(new Date())
  const [date3, setDate3] = useState(new Date())
  const [date4, setDate4] = useState(new Date())
  const [date5, setDate5] = useState(new Date())
  const [date6, setDate6] = useState(new Date())
  const [date7, setDate7] = useState(new Date())
  const [date8, setDate8] = useState(new Date())
  const [date9, setDate9] = useState(new Date())
  const [date10, setDate10] = useState(new Date())

  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [open4, setOpen4] = useState(false)
  const [open5, setOpen5] = useState(false)
  const [open6, setOpen6] = useState(false)
  const [open7, setOpen7] = useState(false)
  const [open8, setOpen8] = useState(false)
  const [open9, setOpen9] = useState(false)
  const [open10, setOpen10] = useState(false)

  const [selectedUser, setSelectedUser] = useState(null);

  const Enviar = () => {
    firestore()
    .collection('testeid')
    .doc(selectedUser)
    .update({
      datadeinsercao: new Date().getDate().toString()+" "+new Date().getHours().toString()+":"+new Date().getMinutes().toString(),
      dia: date.getDate().toString(),
      horaInicio: date.getHours().toString()+":"+date.getMinutes().toString(),
      horaFim: date2.getHours().toString()+":"+date2.getMinutes().toString(),
      horaInicio2: date3.getHours().toString()+":"+date3.getMinutes().toString(),
      horaFim2: date4.getHours().toString()+":"+date4.getMinutes().toString(),
      horaInicio3: date5.getHours().toString()+":"+date5.getMinutes().toString(),
      horaFim3: date6.getHours().toString()+":"+date6.getMinutes().toString(),
      horaInicio4: date7.getHours().toString()+":"+date7.getMinutes().toString(),
      horaFim4: date8.getHours().toString()+":"+date8.getMinutes().toString(),
      horaInicio5: date9.getHours().toString()+":"+date9.getMinutes().toString(),
      horaFim5: date10.getHours().toString()+":"+date10.getMinutes().toString(),
      dia1: date.getDate().toString(),
      dia2: date3.getDate().toString(),
      dia3: date5.getDate().toString(),
      dia4: date7.getDate().toString(),
      dia5: date9.getDate().toString(),
    })
    .then(() => {
      console.log({date})
      alert("Turno Criado!\n Obrigado por usar a nossa App!");
      console.log(date.getHours().toString())
      
    });
  };

  
  
  useEffect(() => {
    const collectionRef = firestore()
    .collection('testeid');
    collectionRef
    .get()
    .then((querySnapshot) => {
    querySnapshot
    .forEach((doc) => {
      data.push(doc.id);
    });
    });
  }, []);
  const [data] = React.useState([]);


  

    return (
      <View>
        <Text style= {{color:'white',fontSize:30, alignSelf:'center',padding:10}}>Pagina de Admin</Text>
        <Text style= {{color:'orange',fontSize:25, alignSelf:'center'}}>- Administrador -</Text>
        <Divider style={{padding:5}}></Divider>
        <SelectList placeholder='Escolha o utilizador' title={{color:'red'}} boxStyles={{color:"white", borderColor:"orange"}} setSelected={(val) => setSelectedUser(val)}
        data={data} dropdownTextStyles={{color:"white", borderColor:'orange'}}></SelectList>
        <Button title="Escolher horario semanal" color={'orange'} onPress={() => setOpen(true)} />

        <DatePicker title={"Inicio turno 1º dia!"}
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
          setOpen2(true)
        }}
        onCancel={() => {
          setOpen(false)
          
        }}/>
        <DatePicker title={"Fim turno 1º dia!"}
        modal
        open={open2}
        date={date2}
        onConfirm={(date) => {
          setOpen2(false)
          setDate2(date)
          setOpen3(true)
        }}
        onCancel={() => {
          setOpen2(false)
        }}/>
       <DatePicker title={"Inicio turno 2º dia!"}
        modal
        open={open3}
        date={date3}
        onConfirm={(date) => {
          setOpen3(false)
          setDate3(date)
          setOpen4(true)
        }}
        onCancel={() => {
          setOpen3(false)
        }}/>
       <DatePicker title={"Fim turno 2º dia!"}
        modal
        open={open4}
        date={date4}
        onConfirm={(date) => {
          setOpen4(false)
          setDate4(date)
          setOpen5(true)
        }}
        onCancel={() => {
          setOpen4(false)
        }}/>
        <DatePicker title={"Inicio turno 3º dia!"}
        modal
        open={open5}
        date={date5}
        onConfirm={(date) => {
          setOpen5(false)
          setDate5(date)
          setOpen6(true)
        }}
        onCancel={() => {
          setOpen5(false)
        }}/>
        <DatePicker title={"Fim turno 3º dia!"}
        modal
        open={open6}
        date={date6}
        onConfirm={(date) => {
          setOpen6(false)
          setDate6(date)
          setOpen7(true)
        }}
        onCancel={() => {
          setOpen6(false)
        }}/>
        <DatePicker title={"Inicio turno 4º dia!"}
        modal
        open={open7}
        date={date7}
        onConfirm={(date) => {
          setOpen7(false)
          setDate7(date)
          setOpen8(true)
        }}
        onCancel={() => {
          setOpen7(false)
        }}/>
        <DatePicker title={"Fim turno 4º dia!"}
        modal
        open={open8}
        date={date8}
        onConfirm={(date) => {
          setOpen8(false)
          setDate8(date)
          setOpen9(true)
        }}
        onCancel={() => {
          setOpen8(false)
        }}/>
        <DatePicker title={"Inicio turno 5º dia!"}
        modal
        open={open9}
        date={date9}
        onConfirm={(date) => {
          setOpen9(false)
          setDate9(date)
          setOpen10(true)
        }}
        onCancel={() => {
          setOpen9(false)
        }}/>
        <DatePicker title={"Fim turno 5º dia!"}
        modal
        open={open10}
        date={date10}
        onConfirm={(date) => {
          setOpen10(false)
          setDate10(date)
        }}
        onCancel={() => {
          setOpen10(false)
        }}/>
        <Button 
        style={{height: 40, 
          width: "70%", 
          borderColor: 'white', 
          borderWidth: 1,  
          marginBottom: 20,
          borderRadius:20,
          alignItems:'center',
          color:"white"}}
        color="#24242c"
        title="Enviar"
        onPress={()=>Enviar()}/>
        <Button 
        style={{height: 40, 
          width: "70%", 
          borderColor: 'white', 
          borderWidth: 1,  
          marginBottom: 20,
          borderRadius:20,
          alignItems:'center',
          color:"white"}}
        color="#24242c"
        title="LogOut"
        onPress={()=>logout()}/>
      </View>
        );
  };

export default TurnosScreen;
