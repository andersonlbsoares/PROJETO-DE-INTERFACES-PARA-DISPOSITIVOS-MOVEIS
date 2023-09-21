import { View, Text, Button, TextInput } from "react-native"
import myStyle from "./MyStyle"
import MyFancyModal from "./MyFancyModal"
import { useState } from "react"

const Imc = ({ route, navigation }) => {
    const [modalVisible, setModalVisible] = useState(false)
    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)
    const [imc, setImc] = useState(0)

    const pesoF = parseFloat(peso)
    const alturaF = parseFloat(altura)
    const IMC = pesoF / (alturaF * alturaF)
    const IMCTruncate = IMC.toFixed(2)

    return (
        <View style={myStyle.container}>
            <Text style={myStyle.header}>imc</Text>
            <TextInput
                style={myStyle.input}
                placeholder="Peso"
                onChangeText={peso => setPeso(peso)}
            />
            <TextInput
                style={myStyle.input}
                placeholder="Altura"
                onChangeText={altura => setAltura(altura)}
            />


            <Button
                title="OK"
                onPress={
                    () => {
                        setImc(IMCTruncate),
                            setModalVisible(true)
                    }

                }
            />

            <MyFancyModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                IMCTruncate={IMCTruncate}
            />

        </View>
    )
}
export default Imc