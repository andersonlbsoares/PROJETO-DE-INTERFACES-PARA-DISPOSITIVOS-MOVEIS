import { View, Text, Button } from 'react-native';
import { useState } from 'react';

const State = () => {
    const [contador, setContador] = useState(0);

    return (
        <View>
            <Text style={{ fontSize: 20, color: 'purple' }}>Contador: {contador}</Text>
            <Button title="Incrementar" onPress={() => setContador(contador + 1)} />

        </View>
    )
}

export default State;