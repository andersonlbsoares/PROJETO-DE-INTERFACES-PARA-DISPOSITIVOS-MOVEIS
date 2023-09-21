import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useState } from 'react';

const MyTextInput = () => {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [resposta, setResposta] = useState('');

    return (
        <View style={estilo.view}>
            <Text style={estilo.header} >Tradutor de Emoji</Text>
            <TextInput style={estilo.input} placeholder="Digite seu nome" onChangeText={(textoDigitado) => setNome(textoDigitado)} />
            <TextInput style={estilo.input} placeholder="Digite seu sobrenome" onChangeText={(textoDigitado) => setSobrenome(textoDigitado)} />
            <Button title="juntar nome e sobrenome" onPress={() => setResposta(nome + " " + sobrenome)} />

            <Text style={estilo.frase} >
                {
                    resposta
                }
                {
                    resposta
                        .split(" ")
                        .map((palavra) => palavra && '🍕')
                        .join("    ")

                }
            </Text>
        </View>

    );
}

const estilo = StyleSheet.create({
    view: {
        flex: 1,
        padding: 20,
        backgroundColor: '#c0c0c0',
        alignItems: "center"
    },
    input: {
        height: 50,
        borderColor: 'black',
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#fff',
        textAlign: 'center',
        marginBottom: 20
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#fff',
        textShadowColor: 'black',
        textShadowRadius: 5
    },
    frase: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
        color: '#000',
        paddingTop: 20
    }

});

export default MyTextInput;