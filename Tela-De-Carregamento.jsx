import { Image, Text, View } from 'react-native';
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#2C3E35' }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={require('./assets/images__2_-removebg-preview.png')}
          style={{ width: 120, height: 150, marginBottom: 20 }}
        />
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 8,
          }}>
          Boca de Planta
        </Text>
        <Text style={{ fontSize: 18, color: 'white', textAlign: 'center' }}>
          Onde a natureza mostra os dentes
        </Text>
      </View>
      <View
        style={{
          height: 60,
          backgroundColor: '#1E2B25',
          justifyContent: 'center',
          alignItems: 'center',
          borderTopWidth: 1,
          borderTopColor: '#ddd',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        }}>
        <Text style={{ fontSize: 14, color: 'white' }}>
          v2.0 - Pedro Henrique Conrado Ferreira
        </Text>
      </View>
    </View>
  );
}
