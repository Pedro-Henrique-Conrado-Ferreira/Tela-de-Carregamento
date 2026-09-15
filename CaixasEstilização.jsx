import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'lightblue',
      }}>

      { /* cabeçalho */ }
      <View style={{ flexDirection: 'row' }}>

      


      <View>

      </View>

      <View style={caixas.caixa1}>
        <Text> caixa 1 </Text>
      </View>
      <View style={caixas.caixa2}>
        <Text> caixa 2 </Text>
      </View>
      <View style={caixas.caixa3}>
        <Text> caixa 3 </Text>
      </View>
    </View>
    { /* conteudo */ }
    <View>

    { /* card 1 */}
    <View>

    { /* codigo aqui */}

    </View>
    </View>

    </View>
  );
}
const caixas = StyleSheet.create({
  caixa1: {
    backgroundColor: 'pink',
    width: '100%',
    height: 50,
    
  },

  caixa2: {
    backgroundColor: 'purple',
    position: 'absolute',
    marginLeft: 60,
    width: 200,
    marginTop: 12,
    height: 25
  },

  caixa3: {
    backgroundColor: 'yellow',
    position: 'absolute',
    marginTop: 12,
    height: 25
  },
});
