import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/FontAwesome";
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
            source={require("./assets/4-2-cartoon-transparent.png")}
            style={styles.image}
          />

          <View style={{ marginLeft: -190 }}>
            <Text style={styles.text}> The Octocat</Text>
            <Text style={styles.text2}> @ctocat</Text>
            <Text style={styles.text3}> Joined 25 jan 2011</Text>
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
            marginStart: 20,
          }}
        >
          <Text style={{ fontSize: 20 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque rerum
            repellat alias perferendis. Pariatur perferendis.
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "gray",
            borderRadius: 20,
            padding: 30,
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 20,
            marginHorizontal: 10,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text style={{ marginBottom: 15, fontSize: 17 }}> Repos</Text>
            <Text style={{ fontSize: 20 }}>8</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ marginBottom: 15, fontSize: 17 }}>Followers</Text>
            <Text style={{ fontSize: 20 }}>3938</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ marginBottom: 15, fontSize: 17 }}>Following</Text>
            <Text style={{ fontSize: 20 }}>9</Text>
          </View>
        </View>

        <View
          style={{
            justifyContent: "flex-start",
            marginStart: 20,
            marginTop: 20,
          }}
        >
          <View style={{marginBottom:10}}>
            <Text style={{ fontSize: 20 }}>
              <Icon name="home" size={30} color="black" /> San Francisco
            </Text>
          </View>

          <View style={{marginBottom:10}}>
            <Text style={{ fontSize: 20 }}>
              <Icon name="github" size={30} color="black" /> https://github.blog
            </Text>
          </View>

          <View style={{marginBottom:10}}>
            <Text style={{ fontSize: 20 }}>
              <Icon name="twitter" size={30} color="black" /> Not Available
            </Text>
          </View>

          <View style={{marginBottom:10}}>
            <Text style={{ fontSize: 20 }}>
              <Icon name="rocket" size={30} color="black" /> @github
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 15, flex: 1 },
  View1: {
    marginTop: 20,
    flexDirection: "row",
    height: 90,
    justifyContent: "space-around",
    paddingTop: 15,
    marginLeft: -70,
  },
  image: {
    borderRadius: 30,
    borderWidth: 30,
    backgroundColor: "gray",
    marginRight: 0,
    height: 35,
    width: 35,
  },
  text: { fontSize: 20, fontWeight: "bold" },
  text2: { color: "#2bf0d2", fontSize: 15 },
});
