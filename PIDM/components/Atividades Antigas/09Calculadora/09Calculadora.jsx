import { View, Text, TextInput, Button, Pressable } from 'react-native';
import { useState } from 'react';
import estilos from './09CSS';
import Botao from './Botao';

const Calculadora = () => {
    const [valor1, setValor1] = useState(0);
    const [valor2, setValor2] = useState(0);
    const [resultado, setResultado] = useState(0);

    const somar = () => {
        setResultado(Number(valor1) + Number(valor2));
    };

    const subtrair = () => {
        setResultado(valor1 - valor2);
    };

    const multiplicar = () => {
        setResultado(valor1 * valor2);
    };

    const dividir = () => {
        setResultado((valor1 / valor2).toFixed(2));
    };

    return (
        <View style={estilos.container}>
            <Text style={estilos.header}>Calculadora</Text>
            <TextInput
                style={estilos.input}
                placeholder="1° Número"
                keyboardType="numeric"
                onChangeText={setValor1}
            />
            <TextInput
                style={estilos.input}
                placeholder="2° Número"
                keyboardType="numeric"
                onChangeText={setValor2}
            />
            <View style={estilos.botoes}>
                <Button title="+" onPress={somar} />
                <Button title="-" onPress={subtrair} />
                <Button title="*" onPress={multiplicar} />
                <Button title="/" onPress={dividir} />
            </View>
            <View style={estilos.botoes}>
                <Botao onPress={somar} texto="+" />
                <Botao onPress={subtrair} texto="-" />
                <Botao onPress={multiplicar} texto="*" />
                <Botao onPress={dividir} texto="/" />

            </View>
            <Text>Resultado: {resultado}</Text>
        </View>
    );
}



export default Calculadora;