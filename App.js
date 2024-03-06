import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar></StatusBar>
      <Text style={{color:"red"}}>I am a developer, and i'm try to learn react native app</Text>
      {/* <Image source={require("./assets/adaptive-icon.png")} style={{hight:200, width:200}} /> */}
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, magnam, eligendi voluptates totam impedit non aspernatur esse repellendus hic nisi laborum culpa minus mollitia fuga quam amet, architecto eveniet maxime!</Text>
      <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores adipisci officia quas repellendus quibusdam id saepe laboriosam ab possimus nemo hic, tenetur rerum reiciendis autem incidunt. Est incidunt dolores molestias.</Text>
      <Image source={require("./assets/adaptive-icon.png")} style={{height:400, width:300}}></Image>
      <Image source={require("./assets/adaptive-icon.png")} style={{height:400, width:300}}></Image>
      <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} style={{height:400, width:350}} />
      
      
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30,
    padding:10,
  },
});
