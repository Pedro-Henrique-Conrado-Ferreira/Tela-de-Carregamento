import { StyleSheet, Text, View } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      <View style={ styles.caixas }></View>
      <View style={ styles.caixas }></View>
      <View style={ styles.caixas }></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'lightblue',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
caixas: {
  backgroundColor: 'red',
  width: 30,
  height: 30,
  margin: 5
}
});
