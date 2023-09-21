import { View, Text, StyleSheet } from 'react-native';
const Questao03 = ({ cor }) => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, fontWeight: "bold", padding: 20 }}>Cadeiras legais :)</Text>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: cor }}>Programação</Text>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: cor }}>Lógica</Text>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: cor }}>Autômatos</Text>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: cor }}>Web</Text>
        </View >
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        borderRadius: 10,
        margin: 10,
        marginTop: 30,
        padding: 10,
        paddingBottom: 30,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Questao03;