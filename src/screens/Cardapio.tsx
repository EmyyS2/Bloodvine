import React, { useEffect, useState } from 'react';
import { StatusBar, View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ImageBackground, TextInput } from 'react-native';

import axios from 'axios';



const renderItem = ({ item }: { item: Produto }) => (
    <TouchableOpacity style={styles.item}>
        <Text style={styles.text}>{item.nome}</Text>
        <Text style={styles.linha}>━━━━━━━━━━ •๋࣭ ⭑🕸🦇🕸๋࣭ ⭑• ━━━━━━━━━━</Text>
        <Text style={styles.textpreco}>{item.preco}</Text>
        <Text style={styles.textingredientes}>{item.ingredientes}</Text>
        <Image source={item.imagem} style={styles.image} />

        <View style={styles.buttom}>
            <TouchableOpacity style={styles.carrinho}>
                <Text style={styles.texto}>+🛍</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.carrinho}>
                <Text style={styles.texto}>-🛍</Text>
            </TouchableOpacity ></View>
    </TouchableOpacity>


);



function Cardapio(): React.JSX.Element {
    const [produto, setProduto] = useState<Produto[]>([]);
   
    const [erro, setErro] = useState<string>("");

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://10.137.11.222:8000/api/produtos/index');
                setProduto(response.data);

                console.log(produto)
            } catch (error) {
                setErro("Ocorreu um erro");
                console.log(error);
            }
        }

        fetchData();
    }, []);


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#640d14' barStyle='light-content' />
            <View style={styles.header}>
            <Image source={require('../assets/images/icone.png')} style={styles.headerIcon} />
            </View>

            <View style={styles.alinhapesquisa} >
                <Image style={styles.pesquisaicon} source={require('../assets/images/lupinha.png')} />
                <TextInput style={styles.pesquisa} placeholder="Pesquisar..." />
            </View>

            <FlatList style={styles.container}
                showsVerticalScrollIndicator={false}
                data={produto}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />

            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image source={require('../assets/images/house.png')} style={styles.footerIcon} />

                </TouchableOpacity>
                <TouchableOpacity >
                    <Image source={require('../assets/images/cardapio.webp')} style={styles.footerIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/images/sacola.png')} style={styles.footerIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/images/perfil.webp')} style={styles.footerIcon} />
                </TouchableOpacity>

            </View>

        </View>

    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',

    },
    headerIcon: {
        width: 350,
        height: 350,
        marginBottom: -70,
        marginTop: -100
    },
    image: {
        width: 320,
        height: 320,
        borderRadius: 30,
        marginTop: 15,
        borderColor: '#5B1824',
        borderWidth: 3

    },
    buttom: {
        flexDirection: "row",
    },
    carrinho: {
        backgroundColor: '#5B1824',
        opacity: 10,
        width: 70,
        height: 30,
        marginTop: 10,
        borderRadius: 10,
        marginLeft: 10,
    },
    texto: {
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 20,
    },
    text: {
        fontSize: 30,
        color: 'white',
        marginLeft: 'auto',
        marginRight: 'auto',


    },
    textpreco: {
        fontSize: 18,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: 'white',
        marginTop: 5
    },
    textingredientes: {
        marginTop: 5,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff'
    },
    item: {
        backgroundColor: '#7C2F3D',
        padding: 19,
        marginVertical: 7,
        marginHorizontal: 15,
        borderRadius: 19,
        borderWidth: 3,
        borderColor: '#772B39',
        marginTop: 30
    },
    header: {
        backgroundColor: '#5B1824',
        alignItems: 'center',
        paddingVertical: 50,


    },
    footer: {
        borderTopWidth: 0.2,
        borderColor: 'white',
        backgroundColor: '#640d14',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10

    },
    footerIcon: {
        width: 32,
        height: 32
    },
    linha: {
        color: 'white',
        marginTop: -8,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    pesquisa: {
        fontSize: 13,
        backgroundColor: '#FFFAE5',
        borderWidth: 3,
        borderColor: '#38040e',
        borderRadius: 100,
        alignItems: 'center',
        width: '75%',
        paddingLeft: 50

    },
    alinhapesquisa: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop:20,
    },
    pesquisaicon: {
        paddingLeft: 10,
        width: 40,
        height: 40
    }
});

export default Cardapio;