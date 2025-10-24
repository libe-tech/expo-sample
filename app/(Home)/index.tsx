import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const [email, setEmail] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.circle} />
        <Text style={styles.title}>Home</Text>
      </View>
      <Text>このアプリは､Expo・ReactNativeのサンプルになります｡</Text>
      <TextInput
        keyboardType="email-address"
        placeholder="メールアドレス..."
        placeholderTextColor="gray"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.email}
        autoCapitalize="none"
      />
      <Button title="送信" onPress={() => console.log(email)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 8,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#f0f0f0",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "blue",
  },
  title: {
    fontSize: 20,
  },
  email: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
    marginLeft: 10,
    borderRadius: 5,
    backgroundColor: "#ffffff",
  },
});
