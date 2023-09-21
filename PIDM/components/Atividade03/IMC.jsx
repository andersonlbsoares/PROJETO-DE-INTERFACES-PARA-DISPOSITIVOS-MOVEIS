import { View, Text, Button, TextInput } from "react-native"
import myStyle from "./MyStyle"

const Imc = ({ route, navigation }) => {
    const imc = { peso: "", altura: "" }
    return (
        <View style={myStyle.container}>
            <Text style={myStyle.header}>imc</Text>
            <TextInput
                style={myStyle.input}
                placeholder="Peso"
                onChangeText={text => imc.peso = text}
            />
            <TextInput
                style={myStyle.input}
                placeholder="Altura"
                onChangeText={text => imc.altura = text}
            />

            <Button
                title="OK"
                onPress={() => navigation.navigate("Resultado", imc)}
            />

        </View>
    )
}
export default Imc