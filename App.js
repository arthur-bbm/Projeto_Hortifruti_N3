import { StyleSheet, Text, View, TextInput, Image, Button} from 'react-native';
import { useState } from 'react';
import CardProduto from './components/CardProduto.js';


export default function App() {
  const [categorias, setCategorias] = useState(['Fruta', 'Legume', 'Verdura'])
  const [lista, setLista] = useState([
    {nome: 'Uva', preco: 10, categoria: 'Fruta', foto: require('./assets/uva.png')},
    {nome: 'Ervilha', preco: 8, categoria: 'Legume', foto: require('./assets/ervilha.png')},
    {nome: 'Pitaya', preco: 15, categoria: 'Fruta', foto: require('./assets/pitaya.png')},
    {nome: 'Beterraba', preco: 8, categoria: 'Legume', foto: null},
    {nome: 'Manga', preco: 7, categoria: 'Fruta', foto: require('./assets/manga.png')},
    {nome: 'Alface', preco: 2, categoria: 'Verdura', foto: require('./assets/alface.png')},
    {nome: 'Repolho', preco: 4, categoria: 'Verdura', foto: require('./assets/repolho.png')},
    {nome: 'Cenoura', preco: 3, categoria: 'Legume', foto: require('./assets/cenoura.png')},
    {nome: 'Banana', preco: 0, categoria: 'Fruta', foto: require('./assets/banana.png')},
    {nome: 'Toyota Corolla', preco: 150000, categoria: 'Automovel', foto: require('./assets/toyota_corolla.png')},
    {nome: 'Couve', preco: 11, categoria: 'Verdura', foto: require('./assets/couve.png')}
  ])

  function validacao() {
    return lista.filter(item => categorias.includes(item.categoria) && item.preco > 0 && item.foto != null && item.nome.length >= 3);
  }

  const [listaFiltrada, setListaFiltrada] = useState(validacao());

  function filtrarCategoria(categoria) {
    if (categoria == 'Todos') {
      setListaFiltrada(validacao());
    } else {
      setListaFiltrada(validacao().filter(item => item.categoria == categoria));
    }
  }

  return (
    <View style={styles.container}>
      <Image style={styles.icone} source={require('./assets/hortifruti_icon.png')}/>
      <View>
        <Text style={styles.title}>PROJETO HORTIFRUTI</Text>
        <View style={styles.caixa}>
          <Text style={styles.textoBotao}>Selecione sua categoria:</Text>
          <View style={styles.botoes}>
            <Button color='grey' title='Todos' onPress={() => filtrarCategoria('Todos')}/>
            <Button color='red' title='Frutas' onPress={() => filtrarCategoria('Fruta')}/>
            <Button color='#633000' title='Legumes' onPress={() => filtrarCategoria('Legume')}/>
            <Button color='green' title='Verduras' onPress={() => filtrarCategoria('Verdura')}/>
          </View>
        </View>
      </View>
      <View style={styles.items}>
        {listaFiltrada.map(item => <CardProduto nome={item.nome} preco={item.preco} categoria={item.categoria} foto={item.foto}/>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  icone: {
    width: 200,
    height: 200,
  },
  title: {
    padding: 20,
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  items: {
    gap: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 20
  },
  botoes: {
    padding: 20,
    width: 500,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  caixa: {
    backgroundColor: '#005a05',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10
  },
  textoBotao: {
    color: 'white',
    fontSize: 24,
  }
});