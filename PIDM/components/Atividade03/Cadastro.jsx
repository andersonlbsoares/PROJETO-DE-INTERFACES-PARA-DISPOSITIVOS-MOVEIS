import { View, Text, Button, TextInput } from "react-native"
import myStyle from "./MyStyle"

const Cadastro = ({ route, navigation }) => {
    const cadastro = { nome: "", idade: "", email: "" }
    return (
        <View style={myStyle.container}>
            <Text style={myStyle.header}>Cadastro</Text>
            <TextInput
                style={myStyle.input}
                placeholder="Nome"
                onChangeText={text => cadastro.nome = text}
            />
            <TextInput
                style={myStyle.input}
                placeholder="Idade"
                onChangeText={text => cadastro.idade = text}
            />
            <TextInput
                style={myStyle.input}
                placeholder="Email"
                onChangeText={text => cadastro.email = text}
            />

            <Button
                title="OK"
                onPress={() => navigation.navigate("Perfil", cadastro)}
            />

        </View>
    )
}
export default Cadastro