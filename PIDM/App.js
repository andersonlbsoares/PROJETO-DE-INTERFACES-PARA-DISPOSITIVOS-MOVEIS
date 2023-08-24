import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import HelloRN from './components/HelloRN';
// import Parent from './components/05Parent';
import Questao01 from './components/tarefa01/Questao01';
import Questao03 from './components/tarefa01/Questao03';


export default function App() {
  return (
    <View style={styles.container}>
      <Questao01 />
      <Questao03 cor="gray" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: "bold",
    color: "red"
  }
});
