import { View, Text, Button } from "react-native"
import myStyle from "./MyStyle"

const Sobre = ({ navigation }) => {
    return (
        <View style={myStyle.container}>
            <Text style={myStyle.header}>Sobre</Text>
            <Text style={myStyle.sobre}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat egestas enim sed hendrerit.
                Integer nec placerat nunc, eu mattis velit. Donec gravida malesuada eros, ac commodo velit facilisis nec.
                Pellentesque maximus rhoncus turpis et tincidunt. Vivamus feugiat scelerisque tortor, sed cursus est laoreet vel.
                Sed a ultricies sapien. Praesent et felis suscipit, sagittis quam quis, commodo ex.
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                In tristique porttitor maximus.
                Sed ipsum nunc, fringilla vitae libero vel, tincidunt rutrum nibh.
                Sed cursus tristique nunc, vitae maximus elit ultricies eget.
                Nulla faucibus placerat risus vulputate feugiat.
                Aliquam leo risus, cursus sed mauris ut, commodo rhoncus dolor.
                In arcu diam, sollicitudin quis dolor venenatis, rhoncus hendrerit ligula.
            </Text>

            <Button
                title="Home"
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    )
}
export default Sobre