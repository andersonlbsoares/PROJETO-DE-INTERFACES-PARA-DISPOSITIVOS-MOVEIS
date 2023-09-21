import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import myStyle from "./MyStyle"


//https://reactnative.dev/docs/modal
const MyFancyModal = ({ modalVisible, setModalVisible, IMCTruncate }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                //Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>
            <View style={myStyle.container}>
                <View style={styles.modalView}>

                    <Text style={styles.modalText}>Resultado</Text>
                    <Text style={styles.modalText}>Seu IMC é:{IMCTruncate}</Text>
                    <Text style={styles.modalText}>Você está:</Text>
                    <Text style={styles.modalText}>{IMCTruncate < 17 ? "Muito abaixo do peso" : IMCTruncate < 18.49 ? "Abaixo do Peso" : IMCTruncate < 24.99 ? "Peso normal"
                        : IMCTruncate < 29.99 ? "Acima do peso" : IMCTruncate < 34.99 ? "Obesidade I" : IMCTruncate < 39.99 ? "Obesidade II (Severa)" : "Obesidade III (Mórbida)"}</Text>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>Fechar</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default MyFancyModal;