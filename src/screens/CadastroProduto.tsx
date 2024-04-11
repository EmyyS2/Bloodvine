import React, { useState } from "react";
import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput,TouchableOpacity, View } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import axios from 'axios';


const CadastroProduto: React.FC = () => {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [nome, setNome] = useState<string>('');
    const [preco, setPreco] = useState<string>('');
    const [ingredientes, setIngredientes] = useState<string>('');
    const [imagem, setImagem] = useState<any>('');

    const CadastroProduto = async () => {
        try{
        const formData=new FormData();
        formData.append('nome', nome);
        formData.append('preco', preco);
        formData.append('ingredientes', ingredientes);
        formData.append('imagem',{
            uri:imagem,
            type:'image/jpeg',
            name:new Date()+ '.jpg',
        });
 console.log (formData);
const response= await axios.post('http://10.137.11.222:8000/api/produtos', formData,{
    headers:{
        'Content-Type':'multipart/form-data'
    }
});
        }catch(error){
            console.log(error);
        }

    }
const abrirCamera=()=>{
    const options={
        mediaType:'photo',
        includeBase64:false,
        maxHeight:2000,
        maxWidth:2000
    };

    launchCamera(options, response =>{
        if(response.didCancel){
            console.log('cancelado pelo usuario');
        }else if(response.error){
            console.log('erro ao abrir a camera');
        }else{
            let imageUri = response.uri|| response.assets?.[0]?.uri;
            setImagem(imageUri);
            console.log(imageUri);
        }
    });
}
const selecionarImagem=()=>{
    const options={
        mediaType:'photo',
        includeBase64:false,
        maxHeight:2000,
        masWidth:2000
    };
    
    launchImageLibrary(options,(response)=>{
        if(response.didCancel){
            console.log('cancelado pelo usuario')
        }else if(response.error){
            console.log('erro ao abrir a galeria');
        }else{
            let imageUri=response.uri || response.assets?.[0]?.uri;
            setImagem(imageUri);
        }
    });
}


    return (
        <View style={styles.container}>
            <ScrollView>
            <StatusBar backgroundColor="#640d14" barStyle="light-content" />
            <View style={styles.header}>
            <Image source={require('../assets/images/icone.png')} style={styles.headerIcon} />
            </View>
            <View style={styles.form}>
                  <View style={styles.alinhamentoImagemSelecionada}>
                    {imagem ? <Image source={{ uri: imagem }} style={styles.imagemSelecionada} /> :null}
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do Produto"
                    value={nome}
                    onChangeText={setNome}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Preço"
                    value={preco}
                    onChangeText={setPreco}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Ingredientes"
                    value={ingredientes}
                    onChangeText={setIngredientes}
                    multiline />
                <TouchableOpacity style={styles.imageButton} onPress={selecionarImagem}>
                    <Text style={styles.imageButtonText}>Selecionar Image</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageButton} onPress={abrirCamera}>
                    <Text style={styles.imageButtonText}>Tirar Foto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageButton} onPress={CadastroProduto}>
                    <Text style={styles.imageButtonText}>Cadastrar Produto</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#000000'
    },
    header: {
        backgroundColor: '#5B1824',
        paddingVertical: 10,
        alignItems: 'center',
    },
    headerIcon: {
        width: 350,
        height: 350,
        marginBottom: -20,
        marginTop: -100
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    form: {
        padding: 10,
        backgroundColor: '#b21e35',
        marginBottom: -10,
        marginTop:50,
        borderRadius:20,
        
    },
    input: {
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        marginBottom: 2,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    imageButton: {
        backgroundColor: '#5B1824',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10
    },
    imageButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    imagemSelecionada: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 1000,
        marginBottom: 10,
        borderWidth:2,
        borderColor:'#5B1824'
        
    },
    alinhamentoImagemSelecionada: {
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#5B1824',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});


export default CadastroProduto;
