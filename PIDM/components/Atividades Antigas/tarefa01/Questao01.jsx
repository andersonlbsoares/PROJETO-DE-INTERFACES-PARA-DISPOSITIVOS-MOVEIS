import { View, Text, Image, Button } from 'react-native';
import { useState } from 'react';
const Questao01 = () => {
    const [imagem, setImagem] = useState(true);

    return (
        <View>
            {imagem ? <Image source={require('../../assets/soares.jpg')} style={{ width: 200, height: 200, borderRadius: 100, margin: 25 }} /> : <Image source={require('../../assets/soares2.jpg')} style={{ width: 200, height: 200, borderRadius: 100, margin: 25 }} />}
            <Button title="Mudar Imagem" onPress={() => setImagem(!imagem)} />
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Anderson Luis Bento Soares</Text>
            <Text style={{ fontSize: 12, fontWeight: "bold" }}>Ciência da Computação - 6° semestre</Text>
            <Text style={{ fontSize: 12, fontWeight: "bold" }}>Canindé - CE</Text>
        </View>
    );
}

export default Questao01;