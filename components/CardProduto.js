import {StyleSheet, Text, View, Image} from 'react-native';

export default function CardProduto({nome, preco, categoria, foto}) {
  return (
      <View style={styles.container}>

          <View>
            <Image source={foto} style={styles.foto}/>
          </View>
          <View>
            <Text style={styles.texto}>PRODUTO: {nome}</Text>
            <Text style={styles.texto}>R${preco}</Text>
            <Text style={styles.texto}>|{categoria}|</Text>
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#424242',
    padding: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  foto: {
    width: 100,
    height: 100,
  },
  texto: {
    color: '#f0f0f0',
    fontWeight: 'bold',
    width: 100,
    padding: 6,
    margin: 'auto',
    textAlign: 'center'
  },
});