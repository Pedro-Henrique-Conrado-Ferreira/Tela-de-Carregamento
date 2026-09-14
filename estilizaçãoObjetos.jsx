import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={caixas.caixa1}>
        {' '}
        <Text> caixa 1 </Text>{' '}
      </View>
      <View style={caixas.caixa2}>
        {' '}
        <Text> caixa 2 </Text>{' '}
      </View>
      <View style={caixas.caixa3}>
        {' '}
        <Text> caixa 3 </Text>{' '}
      </View>
    </View>
  );
}
const caixas = StyleSheet.create({
  caixa1: {
    backgroundColor: 'pink',
    margin: 0,
    //padding: 30,
    width: 150,
    height: 150,
  },

  caixa2: {
    backgroundColor: 'purple',
    marginTop: 0,
    marginBottom: 30,
    marginLeft: 0,
    marginRight: 0,

    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    width: '100%',
  },

  caixa3: {
    backgroundColor: 'yellow',
    margin: 0,
    padding: 0,
  },
});
