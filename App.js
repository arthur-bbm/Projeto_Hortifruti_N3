import { StyleSheet, Text, View, TextInput, Image, Button} from 'react-native';
import { useState } from 'react';
import CardProduto from './components/CardProduto.js';


export default function App() {

  const [categorias, setCategorias] = useState(['Frutas', 'Legumes', 'Verduras'])
  const [lista, setLista] = useState([
    {nome: 'Uva', preco: 10, categoria: 'Fruta', foto: require('./assets/splash-icon.png')},
    {nome: 'Ervilha', preco: 8, categoria: 'Legume', foto: require('./assets/splash-icon.png')},
    {nome: 'Pitaya', preco: 15, categoria: 'Fruta', foto: require('./assets/splash-icon.png')},
    {nome: 'Beterraba', preco: 8, categoria: 'Legume', foto: null},
    {nome: 'Manga', preco: 7, categoria: 'Fruta', foto: require('./assets/splash-icon.png')},
    {nome: 'Alface', preco: 2, categoria: 'Verdura', foto: require('./assets/splash-icon.png')},
    {nome: 'Repolho', preco: 4, categoria: 'Verdura', foto: require('./assets/splash-icon.png')},
    {nome: 'Cenoura', preco: 3, categoria: 'Legume', foto: require('./assets/splash-icon.png')},
    {nome: 'Banana', preco: 0, categoria: 'Fruta', foto: require('./assets/splash-icon.png')},
    {nome: 'Toyota Corolla', preco: 150000, categoria: 'Automovel', foto: require('./assets/splash-icon.png')},
    {nome: 'Couve', preco: 11, categoria: 'Verdura', foto: require('./assets/splash-icon.png')}
  ])


  // Falta programar os botoes e descobrir como caralhos faz para 'esconder' 
  // os itens da lista que nao passam na camada de validacao


  return (
    <View style={styles.container}>
      <Image style={styles.icone} source={require('./assets/hortifruti_icon.png')}/>
      <View>
        <Text style={styles.title}>PROJETO HORTIFRUTI</Text>
        <Text>Selecione sua categoria:</Text>
        <View style={styles.botoes}>
          <Button color='grey' title='Todos'/>
          <Button color='red' title='Frutas'/>
          <Button color='#633000' title='Legumes'/>
          <Button color='green' title='Verduras'/>
        </View>
      </View>
      <View style={styles.items}>
        {lista.map(item => <CardProduto nome={item.nome} preco={item.preco} categoria={item.categoria} foto={item.foto}/>)}
      </View>
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
  icone: {
    width: 200,
    height: 200,
  },
  title: {
    padding: 20,
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  items: {
    gap: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  botoes: {
    padding: 35,
    width: 500,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});