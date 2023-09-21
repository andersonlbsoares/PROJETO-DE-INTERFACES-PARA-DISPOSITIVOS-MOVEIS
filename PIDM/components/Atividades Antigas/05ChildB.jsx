import { View, TextInput } from 'react-native';

const ChildB = ({ dica }) => {
    return (
        <View>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                placeholder={dica}
            />
        </View>
    )
};

export default ChildB;