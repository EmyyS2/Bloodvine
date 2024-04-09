import React from 'react';
import { StatusBar, View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ImageBackground, TextInput } from 'react-native';

interface alimentos {
    id: string;
    nome: string;
    preco: string;
    descricao: string;
    image: any;
}

const dados: alimentos[] = [
    { id: "1", nome: "♰ 𝖑𝖆𝖘𝖆𝖓𝖍𝖆 𝖉𝖊 𝖇𝖊𝖗𝖎𝖓𝖏𝖊𝖑𝖆 ♰", preco: "R$ 30,00", descricao: "Uma variação da clássica lasanha italiana, onde fatias finas de berinjela são usadas em camadas no lugar da massa tradicional. É geralmente recheada com queijo, molho de tomate e outros vegetais, proporcionando um prato rico e reconfortante.", image: require('../assets/images/lasanha.jpg') },
    { id: "2", nome: "♰ 𝖆𝖑𝖒𝖔𝖓𝖉𝖊𝖌𝖆 𝖉𝖊 𝖈𝖆𝖈𝖙𝖔𝖘 ♰", preco: "R$ 24,00", descricao: "Uma alternativa criativa e saudável às almôndegas tradicionais, feitas com carne de cacto picada e temperada com ervas e especiarias. Elas oferecem uma textura única e um sabor leve e fresco.", image: require('../assets/images/almondega.jpg') },
    { id: "3", nome: "♰ 𝖛𝖆𝖌𝖊𝖒 𝖆𝖔 𝖒𝖔𝖑𝖍𝖔 𝖉𝖊 𝖙𝖔𝖒𝖆𝖙𝖊 ♰", preco: "R$ 25,00 ", descricao: "Vagens cozidas no vapor e depois refogadas em um molho de tomate temperado com alho, cebola e ervas. Este prato oferece uma combinação deliciosa de sabores frescos e levemente ácidos.", image: require('../assets/images/vagem.jpg') },
    { id: "4", nome: "♰ 𝖒𝖆𝖈𝖆𝖗𝖗𝖆̃𝖔 𝖉𝖊 𝖆𝖇𝖔𝖇𝖗𝖎𝖓𝖍𝖆 ♰" , preco: "R$ 22,00", descricao: "Uma alternativa saudável ao macarrão tradicional, feito de abobrinha cortada em forma de fios ou tiras finas para imitar a textura do macarrão. Pode ser servido com molho de tomate, pesto ou qualquer outro molho de sua preferência. ", image: require('../assets/images/abobora.jpg') },
    { id: "5", nome: "♰ 𝖇𝖚𝖗𝖆𝖈𝖔 𝖖𝖚𝖊𝖓𝖙𝖊 ♰", preco: "R$ 15,00", descricao: "Um prato tradicional brasileiro, consiste em um pão recheado com carne moída refogada com temperos como alho, cebola, pimentões e tomates. O nome vem do fato de que o recheio aquece o centro do pão.", image: require('../assets/images/quente.jpg') },
    { id: "6", nome: "♰ 𝖒𝖆𝖈𝖆𝖗𝖗𝖔𝖓𝖘 ♰", preco: "R$ 15,00", descricao: "Macarons são pequenos doces feitos com claras de ovo, amêndoas em pó, açúcar e corante alimentício, com um recheio cremoso no meio. Variedades incluem sabores como framboesa, pistache, chocolate", image: require('../assets/images/macarron.jpg') },
    { id: "7", nome: "♰ 𝖓𝖍𝖔𝖖𝖚𝖊 𝖉𝖊 𝖇𝖆𝖙𝖆𝖙𝖆 ♰", preco: "R$ 25,00", descricao: "Uma especialidade italiana, são pequenas bolinhas de massa feitas de batata, farinha e ovo, cozidas em água fervente até ficarem macias. Podem ser servidas com molho de tomate.", image: require('../assets/images/batata.jpg') },
    { id: "8", nome: "♰ 𝖕𝖎𝖟𝖟𝖆 𝖉𝖊 𝖆𝖑𝖍𝖔 ♰", preco: "R$ 45,00", descricao: " Uma variação saborosa da pizza tradicional, com uma base de massa de pizza coberta com molho de tomate, queijo derretido e fatias de alho. É uma opção deliciosa para os amantes de alho.", image: require('../assets/images/pizza.jpg') },
    { id: "9", nome: "♰ 𝖈𝖔𝖔𝖈𝖐𝖎𝖊 ♰", preco: "R$ 12,00 ", descricao: "Cookies são biscoitos doces, geralmente crocantes por fora e macios por dentro. Variedade: Cookies de Red velvet, paçoca e castanhas Ingredientes: farinha, açúcar, manteiga, ovos, chocolate, aveia (dependendo do tipo).", image: require('../assets/images/cookie.jpg') },
    { id: "10", nome: "♰ 𝖒𝖚𝖋𝖋𝖎𝖓𝖘 ♰", preco: "R$ 20,00", descricao: "Muffins são pequenos bolos individuais de chocolate, geralmente feitos em formas de papel.", image: require('../assets/images/muffin.jpg') },
    { id: "11", nome: "♰ 𝖒𝖆𝖈𝖆𝖗𝖗𝖆̃𝖔 𝖆𝖔 𝖒𝖔𝖑𝖍𝖔 𝖉𝖊 𝖆𝖑𝖍𝖔 ♰", preco: "R$25,00", descricao: "Macarrão cozido al dente e depois misturado com um molho cremoso de alho, feito com alho dourado em manteiga, creme de leite e queijo parmesão ralado. É um prato simples, mas repleto de sabor.", image: require('../assets/images/alho.jpg') },
    { id: "12", nome: "♰ 𝖛𝖎𝖓𝖍𝖔 𝖙𝖎𝖓𝖙𝖔 ♰", preco: "R$ 86,90", descricao: "Uma bebida alcoólica feita a partir da fermentação do suco de uvas escuras. Pode variar em sabor, do doce ao seco, e é frequentemente apreciado com refeições ou como uma bebida para relaxar.", image: require('../assets/images/vinho.jpg') },
    { id: "13", nome: "♰ 𝖇𝖑𝖔𝖔𝖉𝖒𝖆𝖗𝖞 ♰", preco: "R$ 35,00", descricao: "Um coquetel clássico feito com vodka, suco de tomate, suco de limão, molho inglês, molho de pimenta, sal e pimenta-do-reino. É servido com gelo em um copo alto e muitas vezes decorado com uma fatia de limão ou aipo.", image: require('../assets/images/blood.jpg') },
    { id: "14", nome: "♰ 𝖇𝖗𝖔𝖜𝖓𝖎𝖊 ♰", preco: "R$ 20,00", descricao: "Um brownie é um pequeno bolo denso e rico em chocolate, geralmente servido em quadrados. Ingredientes: chocolate, manteiga, açúcar, ovos, farinha", image: require('../assets/images/brownie.jpg') },
    { id: "15", nome: "♰ 𝖜𝖍𝖎𝖘𝖐𝖞 ♰", preco: "R$ 120,00", descricao: "Uma bebida destilada feita a partir de grãos fermentados, envelhecida em barris de carvalho. Existem muitas variações de whisky, incluindo bourbon, uísque escocês, uísque irlandês, entre outros, cada um com seu próprio perfil de sabor único. Pode ser apreciado puro, com gelo ou em coquetéis.", image: require('../assets/images/wiskey.jpg') },
];

const renderItem = ({ item }: { item: alimentos }) => (
    <TouchableOpacity style={styles.item}>
        <Text style={styles.text}>{item.nome}</Text>
        <Text style={styles.linha}>━━━━━━━━━━ •๋࣭ ⭑🕸🦇🕸๋࣭ ⭑• ━━━━━━━━━━</Text>
        <Text style={styles.textpreco}>{item.preco}</Text>
        <Text style={styles.textdescricao}>{item.descricao}</Text>
        <Image source={item.image} style={styles.image} />

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
                data={dados}
                renderItem={renderItem}
                keyExtractor={(alimentos) => alimentos.id}
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
    textdescricao: {
        marginTop: 5,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
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
        backgroundColor: '#370617',
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