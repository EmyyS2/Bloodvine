import React from 'react';
import { StatusBar, View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';

interface alimentos {
    id: string;
    nome: string;
    preco: string;
    image: any;
}

const dados: alimentos[] = [

    { id: "2", nome: "𝓦𝓪𝓯𝓯𝓵𝓮𝓼", preco: "R$ 20,00", image: require('./assets/images/wafa.jpg') },
    { id: "3", nome: "𝓒𝓻𝓸𝓲𝓼𝓼𝓪𝓷𝓽", preco: "R$ 25,00 ", image: require('./assets/images/croasan.jpg') },
    { id: "4", nome: "𝓢𝓸𝓭𝓪 𝓘𝓽𝓪𝓵𝓲𝓪𝓷𝓪", preco: "R$ 10,00", image: require('./assets/images/soda.jpg') },
    { id: "6", nome: "𝓜𝓪𝓬𝓪𝓻𝓻𝓸𝓷𝓼", preco: "R$ 25,00", image: require('./assets/images/macarron.jpg') },
];

const renderItem = ({ item }: { item: alimentos }) => (
    <View style={styles.item}>
        <Text style={styles.text}>{item.nome}</Text>
        <Text style={styles.linha}>━━━━━━━━━━━ • ✿ • ━━━━━━━━━━━</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.textpreco}>{item.preco}</Text>
        <View style={styles.buttom}>
            <Text style={styles.textquantidade}>Quantidade:</Text>
            <TouchableOpacity>
                <Text style={styles.buttomzin}>   +   </Text>
            </TouchableOpacity>
            <TextInput></TextInput>
            <TouchableOpacity>
                <Text style={styles.buttomzin}>   -   </Text>
            </TouchableOpacity>
        </View>
    </View>

);



function CarrinhoHappyMeal(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#fff2b2' barStyle='light-content' />
            <View style={styles.header}>
                <Image source={require('./assets/images/icones.png')} style={styles.headerIcon} />
            </View>

            <FlatList style={styles.container}
                showsVerticalScrollIndicator={false}
                data={dados}
                renderItem={renderItem}
                keyExtractor={(alimentos) => alimentos.id}
            />


            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image source={require('./assets/images/house.png')} style={styles.footerIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('./assets/images/cardapio.webp')} style={styles.footerIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('./assets/images/sacola.png')} style={styles.footerIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('./assets/images/perfil.webp')} style={styles.footerIcon} />
                </TouchableOpacity>


            </View>

        </View>

    );

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFAE5',
        flex: 1

    },
    headerIcon: {
        width: 250,
        height: 250,
        marginBottom: -70,
        marginTop: -50
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 30,
        marginTop: 15,
        borderColor: '#6798c0',
        borderWidth: 3

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
    textdescricao: {
        marginTop: 5,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    },
    item: {
        backgroundColor: '#a2d6f9',
        padding: 19,
        marginVertical: 7,
        marginHorizontal: 15,
        borderRadius: 19,
        borderWidth: 3,
        borderColor: '#6798c0',
        marginTop: 30
    },
    header: {
        backgroundColor: '#FFFAE5',
        alignItems: 'center',
        paddingVertical: 50,


    },
    footer: {
        borderTopWidth: 0.2,
        borderColor: 'white',
        backgroundColor: '#fec89a',
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
    buttom: {
        alignItems: 'center',
        paddingLeft: 70,
        backgroundColor: '#a2d6f9',
        borderWidth: 3,
        borderColor: '#6798c0',
        borderRadius: 10,
        width: '75%',
    },
    buttomzin: {
        borderTopWidth: 0.2,
        borderColor: 'white',
        backgroundColor: '#fec89a',
        borderRadius: 10
    },
    textquantidade:{
        fontSize: 18,
        color: 'white',
        
    }
});

export default CarrinhoHappyMeal;