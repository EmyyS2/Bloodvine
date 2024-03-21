import React from 'react';
import { StatusBar, View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';

interface alimentos {
    id: string;
    nome: string;
    preco: string;
    descricao: string;
    image: any;
}

const dados: alimentos[] = [
    { id: "1", nome: "𝓒𝓪𝓯𝓮́ 𝓭𝓪 𝓶𝓪𝓷𝓱𝓪̃ 𝓷𝓸𝓻𝓽𝓮 𝓪𝓶𝓮𝓻𝓲𝓬𝓪𝓷𝓸", preco: "R$ 30,00", descricao: "O café da manhã normalmente consiste em dois ovos, bacon, salsichas pequenas, panqueca e maple syrup.", image: require('./assets/images/American.jpg') },
    { id: "2", nome: "𝓦𝓪𝓯𝓯𝓵𝓮𝓼", preco: "R$ 20,00", descricao: "Um waffle é um tipo de massa doce cozida em um ferro especial para waffles, resultando em uma textura crocante por fora e macia por dentro. Ingredientes: farinha, ovos, leite, fermento, açúcar, manteiga", image: require('./assets/images/wafa.jpg') },
    { id: "3", nome: "𝓒𝓻𝓸𝓲𝓼𝓼𝓪𝓷𝓽", preco: "R$ 25,00 ", descricao: "Um croissant é um pão em formato de meia-lua, com uma textura folhada e amanteigada. Ingredientes: farinha, água, manteiga, fermento, sal. Variedades: salgado( frango, presunto e queijo) e doce(Nutella e morango com chantilly)", image: require('./assets/images/croasan.jpg') },
    { id: "4", nome: "𝓢𝓸𝓭𝓪 𝓘𝓽𝓪𝓵𝓲𝓪𝓷𝓪", preco: "R$ 10,00", descricao: "Uma soda italiana é uma bebida gaseificada feita com xarope de sabor e água com gás. Variedades incluem sabores como limão siciliano, morango e laranja ", image: require('./assets/images/soda.jpg') },
    { id: "5", nome: "𝓕𝓪𝓽𝓲𝓪 𝓭𝓮 𝓫𝓸𝓵𝓸", preco: "R$ 5,00", descricao: "Uma fatia de bolo pode ser de diversos tipos, como bolo de chocolate, bolo de morango, bolo de red velvet, entre outros. Ingredientes variam dependendo do sabor.", image: require('./assets/images/bolo.jpg') },
    { id: "6", nome: "𝓜𝓪𝓬𝓪𝓻𝓻𝓸𝓷𝓼", preco: "R$ 25,00", descricao: "Macarons são pequenos doces feitos com claras de ovo, amêndoas em pó, açúcar e corante alimentício, com um recheio cremoso no meio. Variedades incluem sabores como framboesa, pistache, chocolate", image: require('./assets/images/macarron.jpg') },
    { id: "7", nome: "𝓢𝓶𝓸𝓸𝓽𝓱𝓲𝓮", preco: "R$ 25,00", descricao: "Um smoothie é uma bebida cremosa feita misturando frutas frescas ou congeladas com iogurte, leite ou suco. Variedade:Smoothie de manga, morango e banana Ingredientes: frutas (como morango, banana, manga), iogurte, leite.", image: require('./assets/images/smothie.jpg') },
    { id: "8", nome: "𝓕𝓪𝓽𝓲𝓪 𝓭𝓮 𝓣𝓸𝓻𝓽𝓪𝓼", preco: "R$ 5,00", descricao: "Uma fatia de torta pode ser de diversos tipos, como torta de maçã, torta de cereja, torta de morango, entre outros. Ingredientes variam dependendo do sabor.", image: require('./assets/images/pie.jpg') },
    { id: "9", nome: "𝓒𝓸𝓸𝓴𝓲𝓮𝓼", preco: "R$ 12,00 ", descricao: "Cookies são biscoitos doces, geralmente crocantes por fora e macios por dentro. Variedade: Cookies de Red velvet, paçoca e castanhas Ingredientes: farinha, açúcar, manteiga, ovos, chocolate, aveia (dependendo do tipo).", image: require('./assets/images/cookie.jpg') },
    { id: "10", nome: "𝓶𝓾𝓯𝓯𝓲𝓷𝓼", preco: "R$ 20,00", descricao: " Muffins são pequenos bolos individuais, geralmente feitos em formas de papel. Variedade:Muffins de BlueBarry, chocolate e frutas crisalizadas Ingredientes: farinha, açúcar, ovos, leite, fermento, manteiga (dependendo do sabor).", image: require('./assets/images/muffin.jpg') },
    { id: "11", nome: "𝓬𝓱𝓪́𝓼", preco: "R$ 15,00", descricao: "Chá é uma bebida quente feita pela infusão de folhas de chá em água quente. Variedades incluem chá preto, chá verde, chá de camomila, chá de pêssego e chá de morango.", image: require('./assets/images/cha.jpg') },
    { id: "12", nome: "𝓬𝓪𝓯𝓮́𝓼", preco: "R$ 15,00", descricao: "Café é uma bebida quente feita pela infusão de grãos de café moídos em água quente. Variedades incluem café expresso, café com leite, café americano.", image: require('./assets/images/cafe.jpg') },
    { id: "13", nome: "𝓼𝓾𝓬𝓸𝓼", preco: "R$ 16,00", descricao: "Suco é uma bebida feita a partir da extração do líquido de frutas ou vegetais frescos. Variedades incluem suco de laranja, suco de morango, suco de maracujá.", image: require('./assets/images/suco.jpg') },
    { id: "14", nome: "𝓑𝓻𝓸𝔀𝓷𝓲𝓮", preco: "R$ 20,00", descricao: "Um brownie é um pequeno bolo denso e rico em chocolate, geralmente servido em quadrados. Ingredientes: chocolate, manteiga, açúcar, ovos, farinha", image: require('./assets/images/brownie.jpg') },
    { id: "15", nome: "𝓑𝓮𝓰𝓪𝓵", preco: "R$ 12,00", descricao: " Um bagel é um pão em forma de anel, geralmente cozido no vapor e depois assado. Acompanhamento: Manteiga ou geléia Ingredientes: farinha, água, fermento, açúcar, sal.", image: require('./assets/images/begal.jpg') },
];

const renderItem = ({ item }: { item: alimentos }) => (
    <TouchableOpacity style={styles.item}>
        <Text style={styles.text}>{item.nome}</Text>
        <Text style={styles.linha}>━━━━━━━━━━━ • ✿ • ━━━━━━━━━━━</Text>
        <Text style={styles.textpreco}>{item.preco}</Text>
        <Text style={styles.textdescricao}>{item.descricao}</Text>
        <Image source={item.image} style={styles.image} />
    </TouchableOpacity>

);



function HappyMeal(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#fff2b2' barStyle='light-content' />
            <View style={styles.header}>
                <Image source={require('./assets/images/icones.png')} style={styles.headerIcon} />
            </View>

            <View style={styles.alinhapesquisa} >
                <Image style={styles.pesquisaicon} source={require('./assets/images/lupinha.png')}/>
                <TextInput style={styles.pesquisa} placeholder="Pesquisar..." />
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
        width: 320,
        height: 320,
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
    pesquisa: {
        fontSize: 13,
        backgroundColor: '#FFFAE5',
        borderWidth: 3,
        borderColor: '#6798c0',
        borderRadius: 100,
        alignItems: 'center',
        width: '75%',
        paddingLeft: 50

    },
    alinhapesquisa: {
        alignItems: 'center',
        flexDirection:'row',
        justifyContent:'center'
    },
    pesquisaicon:{
        paddingLeft:10,
        width: 40,
        height: 40 
    }
});

export default HappyMeal;