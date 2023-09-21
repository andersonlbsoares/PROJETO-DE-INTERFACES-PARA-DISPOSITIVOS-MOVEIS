import { View, Text, Button, Image } from "react-native"
import myStyle from "./MyStyle"

const Perfil = ({ route, navigation }) => {
    const { nome, idade, email } = route.params
    return (
        <View style={myStyle.container}>
            <Text style={myStyle.header}>Perfil</Text>
            <Image
                source={require("../../assets/cachorro.jpg")}
            />
            <Text style={myStyle.dados}>{nome}</Text>
            <Text style={myStyle.dados}>{idade}</Text>
            <Text style={myStyle.dados}>{email}</Text>
            <Button
                title="Home"
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    )
}

export default Perfil