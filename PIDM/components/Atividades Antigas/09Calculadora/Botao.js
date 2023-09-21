import { Pressable, Text } from "react-native";

const Botao = (props) => {
    return (
        <Pressable
            onPress={props.onPress}
            style={
                ({ pressed }) => [
                    {
                        backgroundColor: pressed ? 'red' : 'blue',
                        height: 30,
                        width: 30,
                        paddingBottom: 5,
                        justifyContent: 'center',
                        alignItems: 'center',

                    }
                ]
            }
        >
            <Text
                style={
                    {
                        color: 'white',
                        fontSize: 20,
                    }
                }
            >
                {props.texto}
            </Text>

        </Pressable>
    );
}

export default Botao;