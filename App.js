import { StyleSheet, Text, View, TextInput, Image} from 'react-native';
import CardProduto from './components/CardProduto.js';

export default function App() {
  return (
    <View style={styles.container}>
      <CardProduto nome='Limão' preco={10} categoria='Legume' foto={require('./assets/splash-icon.png')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});