import { Button, View, Text, TextInput } from 'react-native';
import React, { useEffect } from 'react';
import { Card, Divider } from '@rneui/themed';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { ScrollView } from 'react-native-gesture-handler';



const UserNormal = ({ navigation }) => {
  
  const Item = auth().currentUser.email

  const logout = () => {
    auth()
    .signOut()
    .then(() => navigation.replace("Login"));
  }
  function horaFinal(documentSnapshot){return documentSnapshot.get('horaFim');}
  function horaFinal2(documentSnapshot){return documentSnapshot.get('horaFim2');}
  function horaFinal3(documentSnapshot){return documentSnapshot.get('horaFim3');}
  function horaFinal4(documentSnapshot){return documentSnapshot.get('horaFim4');}
  function horaFinal5(documentSnapshot){return documentSnapshot.get('horaFim5');}
  function horaInicial(documentSnapshot){return documentSnapshot.get('horaInicio');}
  function horaInicial2(documentSnapshot){return documentSnapshot.get('horaInicio2');}
  function horaInicial3(documentSnapshot){return documentSnapshot.get('horaInicio3');}
  function horaInicial4(documentSnapshot){return documentSnapshot.get('horaInicio4');}
  function horaInicial5(documentSnapshot){return documentSnapshot.get('horaInicio5');}
  function nomeuser(documentSnapshot){return documentSnapshot.get('username')}
  function dia11(documentSnapshot){return documentSnapshot.get('dia1');}
  function dia22(documentSnapshot){return documentSnapshot.get('dia2');}
  function dia33(documentSnapshot){return documentSnapshot.get('dia3');}
  function dia44(documentSnapshot){return documentSnapshot.get('dia4');}
  function dia55(documentSnapshot){return documentSnapshot.get('dia5');}
  function feitodoc(documentSnapshot){return documentSnapshot.get('datadeinsercao');}
  const [feito1, setfeito] = React.useState([]);
  const [horaInicio, setHoraInicio] = React.useState([]);
  const [horaInicio2, setHoraInicio2] = React.useState([]);
  const [horaInicio3, setHoraInicio3] = React.useState([]);
  const [horaInicio4, setHoraInicio4] = React.useState([]);
  const [horaInicio5, setHoraInicio5] = React.useState([]);
  const [horaFim, setHoraFim] = React.useState([]);
  const [horaFim2, setHoraFim2] = React.useState([]);
  const [horaFim3, setHoraFim3] = React.useState([]);
  const [horaFim4, setHoraFim4] = React.useState([]);
  const [horaFim5, setHoraFim5] = React.useState([]);
  const [nome, setnome] = React.useState([]);
  const [dia1,setdia1] = React.useState([]);
  const [dia2,setdia2] = React.useState([]);
  const [dia3,setdia3] = React.useState([]);
  const [dia4,setdia4] = React.useState([]);
  const [dia5,setdia5] = React.useState([]);

  const lerNome = () => {
    firestore()
    .collection('testeid')
    .doc(Item)
    .get()
    .then(documentSnapshot => nomeuser(documentSnapshot))
    .then(feito => {
      const nome = []
      nome.push(feito);
      setnome(nome);
    })
  };

  const lerFinal = () => {
    firestore()
    .collection('testeid')
    .doc(Item)
    .get()
    .then(documentSnapshot => horaFinal(documentSnapshot))
    .then(feito => {
      const horinha = []
      horinha.push(feito);
      setHoraFim(horinha);
    })
  };

  const lerFinal2 = () => {
    firestore()
    .collection('testeid')
    .doc(Item)
    .get()
    .then(documentSnapshot => horaFinal2(documentSnapshot))
    .then(feito => {
      const horinha = []
      horinha.push(feito);
      setHoraFim2(horinha);
    })
  };

  const lerFinal3 = () => {
    firestore()
    .collection('testeid')
    .doc(Item)
    .get()
    .then(documentSnapshot => horaFinal3(documentSnapshot))
    .then(feito => {
      const horinha = []
      horinha.push(feito);
      setHoraFim3(horinha);
    })
  };

  const lerFinal4 = () => {
    firestore()
    .collection('testeid')
    .doc(Item)
    .get()
    .then(documentSnapshot => horaFinal4(documentSnapshot))
    .then(feito => {
      const horinha = []
      horinha.push(feito);
      setHoraFim4(horinha);
    })
  };

  const lerFinal5 = () => {
    firestore()
    .collection('testeid')
    .doc(Item)
    .get()
    .then(documentSnapshot => horaFinal5(documentSnapshot))
    .then(feito => {
      const horinha = []
      horinha.push(feito);
      setHoraFim5(horinha);
    })
  };

  const lerInicial = () => {
    firestore()
    .collection('testeid')
    .doc(Item)
    .get()
    .then(documentSnapshot => horaInicial(documentSnapshot))
    .then(feito => {
      const horinha = []
      horinha.push(feito);
      setHoraInicio(horinha);
    })
  };

  const lerInicial2 = () => {
    firestore()
    .collection('testeid')
    .doc(Item)
    .get()
    .then(documentSnapshot => horaInicial2(documentSnapshot))
    .then(feito => {
      const horinha = []
      horinha.push(feito);
      setHoraInicio2(horinha);
    })
  };

  const lerInicial3 = () => {
    firestore()
    .collection('testeid')
    .doc(Item)
    .get()
    .then(documentSnapshot => horaInicial3(documentSnapshot))
    .then(feito => {
      const horinha = []
      horinha.push(feito);
      setHoraInicio3(horinha);
    })
  };

  const lerInicial4 = () => {
    firestore()
    .collection('testeid')
    .doc(Item)
    .get()
    .then(documentSnapshot => horaInicial4(documentSnapshot))
    .then(feito => {
      const horinha = []
      horinha.push(feito);
      setHoraInicio4(horinha);
    })
  };

  const lerInicial5 = () => {
    firestore()
    .collection('testeid')
    .doc(Item)
    .get()
    .then(documentSnapshot => horaInicial5(documentSnapshot))
    .then(feito => {
      const horinha = []
      horinha.push(feito);
      setHoraInicio5(horinha);
    })
  };

  const lerdia1 = () => {
    firestore()
    .collection('testeid')
    .doc(Item)
    .get()
    .then(documentSnapshot => dia11(documentSnapshot))
    .then(feito => {
      const horinha = []
      horinha.push(feito);
      setdia1(horinha);
    })
  };
  const lerdia2 = () => {
    firestore()
    .collection('testeid')
    .doc(Item)
    .get()
    .then(documentSnapshot => dia22(documentSnapshot))
    .then(feito => {
      const horinha = []
      horinha.push(feito);
      setdia2(horinha);
    })
  };
  const lerdia3 = () => {
    firestore()
    .collection('testeid')
    .doc(Item)
    .get()
    .then(documentSnapshot => dia33(documentSnapshot))
    .then(feito => {
      const horinha = []
      horinha.push(feito);
      setdia3(horinha);
    })
  };
  const lerdia4 = () => {
    firestore()
    .collection('testeid')
    .doc(Item)
    .get()
    .then(documentSnapshot => dia44(documentSnapshot))
    .then(feito => {
      const horinha = []
      horinha.push(feito);
      setdia4(horinha);
    })
  };
  const lerdia5 = () => {
    firestore()
    .collection('testeid')
    .doc(Item)
    .get()
    .then(documentSnapshot => dia55(documentSnapshot))
    .then(feito => {
      const horinha = []
      horinha.push(feito);
      setdia5(horinha);
    })
  };
  const feito = () => {
    firestore()
    .collection('testeid')
    .doc(Item)
    .get()
    .then(documentSnapshot => feitodoc(documentSnapshot))
    .then(feito => {
      const horinha = []
      horinha.push(feito);
      setfeito(horinha);
    })
  };
  useEffect(() => {
    feito()
    lerdia1()
    lerdia2()
    lerdia3()
    lerdia4()
    lerdia5()
    lerFinal5()
    lerFinal4()
    lerFinal3()
    lerFinal2()
    lerNome()
    lerFinal()
    lerInicial()
    lerInicial2()
    lerInicial3()
    lerInicial4()
    lerInicial5()
  }, []);

  return (
    <View>
    <Text style= {{color:'white',fontSize:30, alignSelf:'center',padding:10}}>Pagina de Usuario</Text>
    <Text style= {{color:'orange',fontSize:25, alignSelf:'center'}}>- {nome} -</Text>
    <Divider style={{padding:5}}></Divider>
    <Text style= {{color:'white',fontSize:20, alignSelf:'center', padding:10}}>- Turnos dos proximos 5 dias -</Text>
    <Text style= {{color:'white',fontSize:10, alignSelf:'center', padding:5}}>- Turnos formados em {feito1} -</Text>
      <ScrollView style={{height:'60%'}}>
        <Card containerStyle={{ marginTop: 10, marginBottom:12,
         borderRadius:20 , 
         backgroundColor:'#24242c',
         borderWidth:3, 
         borderColor:'orange'}}>
          <Card.Title style= {{color:'white'}}>Dia: {dia1}</Card.Title>
          <Card.Divider color='orange'/>
          <Text style={{color:'white'}}>Hora do Inicio - {horaInicio}</Text>
          <Text style={{color:'white',paddingBottom:10} }>Hora do Fim do Turno - {horaFim}</Text>

        </Card >
        <Card containerStyle={{ marginTop: 10, marginBottom:12,
         borderRadius:20 , 
         backgroundColor:'#24242c',
         borderWidth:3, 
         borderColor:'orange'}}>
          <Card.Title style= {{color:'white'}}>Dia: {dia2}</Card.Title>
          <Card.Divider color='orange'/>
          <Text style={{color:'white'}}>Hora do Inicio - {horaInicio2}</Text>
          <Text style={{color:'white',paddingBottom:10} }>Hora do Fim do Turno - {horaFim2}</Text>

        </Card >
        <Card containerStyle={{ marginTop: 10, marginBottom:12,
         borderRadius:20 , 
         backgroundColor:'#24242c',
         borderWidth:3, 
         borderColor:'orange'}}>
          <Card.Title style= {{color:'white'}}>Dia: {dia3}</Card.Title>
          <Card.Divider color='orange'/>
          <Text style={{color:'white'}}>Hora do Inicio - {horaInicio3}</Text>
          <Text style={{color:'white',paddingBottom:10} }>Hora do Fim do Turno - {horaFim3}</Text>

        </Card >
        <Card containerStyle={{ marginTop: 10, marginBottom:12,
         borderRadius:20 , 
         backgroundColor:'#24242c',
         borderWidth:3, 
         borderColor:'orange'}}>
          <Card.Title style= {{color:'white'}}>Dia: {dia4}</Card.Title>
          <Card.Divider color='orange'/>
          <Text style={{color:'white'}}>Hora do Inicio - {horaInicio4}</Text>
          <Text style={{color:'white',paddingBottom:10} }>Hora do Fim do Turno - {horaFim4}</Text>

        </Card >
        <Card containerStyle={{ marginTop: 10, marginBottom:12,
         borderRadius:20 , 
         backgroundColor:'#24242c',
         borderWidth:3, 
         borderColor:'orange'}}>
          <Card.Title style= {{color:'white'}}>Dia: {dia5}</Card.Title>
          <Card.Divider color='orange'/>
          <Text style={{color:'white'}}>Hora do Inicio - {horaInicio5}</Text>
          <Text style={{color:'white',paddingBottom:10} }>Hora do Fim do Turno - {horaFim5}</Text>

        </Card >
      </ScrollView>
      <Divider style={{padding:5}}></Divider>

        <Button 
          style={{height: 40, 
      width: "70%", 
      borderColor: 'white', 
      borderWidth: 1,  
      marginBottom: 20,
      borderRadius:20,
      alignItems:'center',
      color:"white"}}
    color="orange"
    title="LogOut"
          onPress={()=>logout()}/>
    </View>
  );
};

export default UserNormal;