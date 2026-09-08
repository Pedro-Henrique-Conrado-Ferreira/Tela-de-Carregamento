
import { Image, Text, View, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
     
      <StatusBar style="black" />
      
      <SafeAreaView style={{ flex: 1, backgroundColor: '#2C3E35' }}>
        
        <ScrollView style={{ flex: 1 }}>
          <View style={{ alignItems: 'center', paddingBottom: 30 }}>
            
            
            <View style={{ marginTop: 20, alignItems: 'center' }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: 8,
                }}>
                Boca de Planta
              </Text>
              <Text style={{ fontSize: 18, color: 'white' }}>
                Onde a natureza mostra os dentes
              </Text>
              
              <Image
                source={require('./assets/images.jpg')}
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: 100,
                  marginTop: 20,
                }}
              />
            </View>

            
            <View style={{ padding: 24, width: '100%' }}>
              <Text style={{ color: 'white', fontSize: 16, lineHeight: 24, textAlign: 'justify' }}>
                As plantas carnívoras são organismos fascinantes que habitam solos pobres em nutrientes. 
                Elas realizam fotossíntese como os outros vegetais, mas utilizam insetos e pequenos 
                artrópodes como complemento nutricional. Por meio de folhas modificadas que funcionam 
                como armadilhas, elas atraem as presas com cores e odores atraentes. Uma vez capturado, 
                o animal é digerido por enzimas específicas liberadas pela própria planta. Isso permite a 
                extração de compostos essenciais para a sobrevivência, como o nitrogênio. Existem centenas 
                de espécies espalhadas pelo mundo, com os mais variados formatos e mecanismos de captura. 
                Ao contrário dos mitos populares, elas não representam perigo para os seres humanos.
              </Text>
            </View>

          </View>
        </ScrollView>

        
        <View
          style={{
            height: 60,
            backgroundColor: '#1E2B25',
            justifyContent: 'center',
            alignItems: 'center',
            borderTopWidth: 1,
            borderTopColor: '#3d5649',
          }}>
          <Text style={{ fontSize: 14, color: 'white' }}>
            v2.0 - Pedro Henrique Conrado Ferreira
          </Text>
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}
