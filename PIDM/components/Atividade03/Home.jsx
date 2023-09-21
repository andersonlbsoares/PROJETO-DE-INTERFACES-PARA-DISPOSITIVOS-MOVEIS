import { View, Text, Button } from "react-native"
import myStyle from "./MyStyle"
import { useState } from "react"

// const student = { name: "Sycran", grade: "A+" }

const Home = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <View style={myStyle.quadro}>
            <Text style={myStyle.header}>Home</Text>
            <Button
                title="Cadastro"
                onPress={() => navigation.navigate("Cadastro")}
            />
            <Button
                title="IMC"
                onPress={() => navigation.navigate("IMC")}
            />
            <Button
                title="Sobre"
                onPress={() => navigation.navigate("Sobre")}
            />


        </View>
    )
}
export default Home