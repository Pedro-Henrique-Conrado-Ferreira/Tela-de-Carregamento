#Tela de Carregamento
import { Image, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor:'#2C3E35'}}>
      <View style={{ alignItems: 'center',paddingTop:25 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold',color: 'white' }}>Boca de Planta</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 18,color: 'white'  }}> Onde a natureza mostra os dentes </Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk7IERwRRtLAZct3fDSAipAmNBV31tC48BCQ&s',
          }}
          style={{ width: 120, height: 150, margin: 130, padding: 10 }}
        />
      </View>
      <View
        style={{
          height: 60,
          backgroundColor: '#',
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
