import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './Home'
import Cadastro from './Cadastro'
import Imc from './IMC'
import Sobre from './Sobre'
import Perfil from './Perfil'
import Resultado from './Resultado'


const Stack = createNativeStackNavigator()

const MainScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{ title: "Home" }} />
                <Stack.Screen name="Cadastro" component={Cadastro} options={{ title: "Cadastro" }} />
                <Stack.Screen name="IMC" component={Imc} options={{ title: "IMC" }} />
                <Stack.Screen name="Sobre" component={Sobre} options={{ title: "Sobre" }} />
                <Stack.Screen name="Perfil" component={Perfil} options={{ title: "Perfil" }} />
                <Stack.Screen name="Resultado" component={Resultado} options={{ title: "Resultado" }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainScreen