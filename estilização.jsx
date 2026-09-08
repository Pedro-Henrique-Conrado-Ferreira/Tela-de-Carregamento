import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={meu_estilo.corpo_tela}>
    <Text style={texto_estilo.titulo_estilo}> LOUD </Text>
      <Text style={texto_estilo.texto_corpo}>
        Dizem que o tempo cura tudo, mas a verdade é que o tempo apenas passa.
        Quem cura, quem muda e quem constrói somos nós. Vivemos em uma pressa
        constante, correndo atrás de metas futuras ou lamentando escolhas
        passadas, esquecendo que o único momento real que possuímos é o
        presente.
      </Text>
    </View>
  );
}

const meu_estilo = StyleSheet.create({
  corpo_tela: {
    flex: 1,
    backgroundColor: 'red',
  },
});
const texto_estilo = StyleSheet.create({
  texto_corpo: {
    fontSize: 18,
    fontWeight: '200',
    fontStyle: 'italic',
    color: 'lightyellow',
    textAlign: 'center'
  },
  titulo_estilo: {
fontSize: 48,
fontWeight: '500',
color: 'green'

  }
});
