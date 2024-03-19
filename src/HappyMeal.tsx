import React from 'react';
import {StatusBar, View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';

interface alimentos{
    id:string;
    nome:string;
    preco:string;
    descricao:string;
    image:any;
}

const dados:alimentos[]=[
   { id: "1", nome: "Café da Manhã estadunidence", preco: "R$ 30,00", descricao: "", image: require('./assets/images/American.jpg')},
   { id: "2", nome: "Waffle", preco: "R$ 20,00", descricao: "", image: require('./assets/images/wafa.jpg')},
   { id: "3", nome: "Croissant", preco: "R$ 25,00 ", descricao: "", image: require('./assets/images/croasan.jpg')},
   { id: "4", nome: "Soda Italiana", preco: "R$ 10,00", descricao: "", image: require('./assets/images/soda.jpg')},
   { id: "5", nome: "Fatia de bolo", preco: "R$ 5,00", descricao: "", image: require('./assets/images/bolo.jpg')},
   { id: "6", nome: "Macarrons", preco: "R$ 25,00", descricao: "", image: require('./assets/images/macarron.jpg')},
   { id: "7", nome: "Smoothie", preco: "R$ 25,00", descricao: "", image: require('./assets/images/smothie.jpg')},
   { id: "8", nome: "Fatia de Tortas", preco: "R$ 5,00", descricao: "", image: require('./assets/images/pie.jpg')},
   { id: "9", nome: "Cookies", preco: "R$ 12,00 ", descricao: "", image: require('./assets/images/cookie.jpg')},
   { id: "10", nome: "Muffins", preco: "R$ 20,00", descricao: "", image: require('./assets/images/muffin.jpg')},
   { id: "11", nome: "Chás", preco: "R$ 15,00", descricao: "", image: require('./assets/images/cha.jpg')},
   { id: "12", nome: "Cafés", preco: "R$ 15,00", descricao: "", image: require('./assets/images/cafe.jpg')},
   { id: "13", nome: "Sucos", preco: "R$ 16,00", descricao: "", image:require('./assets/images/suco.jpg')},
   { id: "14", nome: "Brownie", preco: "R$ 20,00", descricao: "", image: require('./assets/images/brownie.jpg')},
   { id: "15", nome: "Begal", preco: "R$ 12,00", descricao: "", image: require('./assets/images/begal.jpg')},
];

const renderItem = ({ item }: { item: alimentos }) => (
    <TouchableOpacity style={styles.item}>
        <Text style={styles.text}>{item.nome}</Text>
        <Text style={styles.text1}>{item.preco}</Text>
        <Text>{item.descricao}</Text>
        <Image source={item.image} style={styles.image}/>
            </TouchableOpacity>
);

function HappyMeal():React.JSX.Element{
    return(
       <View style={styles.container}>
        <StatusBar backgroundColor='#fff2b2' barStyle='light-content'/>
      <View style={styles.header}>
      <Image source={require('./assets/images/icon.jpg')} style={styles.headerIcon}/>
      </View>
      <FlatList style={styles.container}
      showsVerticalScrollIndicator={false}
                data={dados}
                renderItem={renderItem}
                keyExtractor={(alimentos) => alimentos.id}
      />
       </View> 
    );

}
const styles =StyleSheet.create({
    container: {
        backgroundColor: '#FFFAE5',
        flex: 1
   
    },
    headerIcon:{
        width:300,
        height:300
    },
    image:{
        width:320,
        height:320
    },
    text:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    text1:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    item: {
        backgroundColor: '#bbdefb',
        padding: 19,
        marginVertical: 7,
        marginHorizontal: 15,
        borderRadius: 19,
        borderWidth: 3,
        borderColor: '#90caf9'

    },
    header: {
        backgroundColor: '#FFFAE5',
        alignItems: 'center',
        paddingVertical: 50

    },
    footer:{
        borderTopWidth:0.2,
        backgroundColor:'white',
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems:'center',
        paddingVertical:10

    },
    footerIcon:{
width:30,
height:30
    }
});

export default HappyMeal;