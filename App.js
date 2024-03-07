import { StatusBar } from "expo-status-bar";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar></StatusBar>
        <View style={styles.View1}>
          <Image
            source={require("./assets/favicon.png")}
            style={styles.image}
          />
          <Text style={styles.text}> The Octocat</Text>
          <Text style={styles.text2}> Octocat</Text>
          <Text style={styles.text3}> Joined 25 jan 2011</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  View1: {
    flex: 1,
    marginTop: 35,
    backgroundColor: "red",
    flexDirection: "row",
  },
  image: {},
  text: {flexDirection:'column'},
  text2: {flexDirection:'column'},
  text3: {flexDirection:'column'},
});
