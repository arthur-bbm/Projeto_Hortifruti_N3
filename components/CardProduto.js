import { StyleSheet, Text, View, Image} from 'react-native';

export default function CardProduto({nome, preco, categoria, imagem}) {
  return (
    <View style={styles.container}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#424242',
    alignContent: 'center'
  },
  foto: {
    borderRadius: 5,
  }
});