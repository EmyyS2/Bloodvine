import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function Login(): JSX.Element {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function login() {
        const dados = {
            email: email,
            password: password,
        }
        console.log(dados);
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} resizeMode="contain"
                source={require('../assets/images/icones.png')}  />
            
            <View style={styles.card}>

            <Text style={styles.title}>Login do cliente</Text>
                <TextInput style={styles.input} placeholder="E-mail:"
                    placeholderTextColor={"#ACA3A9"}
                    onChangeText={(textEmail) => setEmail(textEmail)} />

                <TextInput style={styles.input} placeholder="Senha:"
                    placeholderTextColor={"#ACA3A9"}
                    onChangeText={(textPassword) => setPassword(textPassword)} secureTextEntry/>

                <TouchableOpacity style={styles.button}
                    onPress={() => { login() }}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.forgetPassword}>Esqueceu a senha?</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.forgetPassword}>Não possui conta? Cadastre-se!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#caf0f8'
    },
    
    logo: {
        width: 350,
        height: 350,
        marginBottom: 10,
        marginTop: -150
    },
    card: {
        backgroundColor: '#468faf',
        width: 300,
        borderRadius: 10,
        padding: 20,
        elevation: 3,
        shadowColor: 'rgb(0,0,0,0.3)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
        textAlign: 'center'
    },
    input: {
        backgroundColor: '#e2eafc',
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e2eafc'
    },
    button: {
        backgroundColor: '#2a6f97',
        height: 40,
        borderRadius: 8,


    },
    buttonText: {
        color: '#ACA3A9',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 40,

    },
    forgetPassword: {
        color: '#f3eaf9',
        textAlign: 'center',
        marginTop: 10
    }

});
export default Login;