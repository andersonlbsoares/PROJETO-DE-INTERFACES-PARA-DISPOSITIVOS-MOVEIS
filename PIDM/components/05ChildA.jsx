import { Image, View } from 'react-native';

const ChildA = () => {
    return (
        <View
            style={{ backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }} >
            <Image
                source={{ uri: 'https://www.quixada.ufc.br/wp-content/uploads/2015/05/Andreia-225x300.png' }}
                style={{ width: 100, height: 100 }}
            />

        </View>
    )
};

export default ChildA;