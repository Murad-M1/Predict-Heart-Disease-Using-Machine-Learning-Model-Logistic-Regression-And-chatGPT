import { View, Text, Image } from "react-native";

export default function SecondPage({ route }) {
  const { chatResponse, data } = route.params;

  return (
    <View style={{ backgroundColor: "#839EC8", flex: 1, alignItems: "center" }}>
      <Image
        source={require("../Heart.png")}
        style={{
          width: 150,
          height: 150,
          top: 10,
          right: 10,
        }}
      ></Image>
      <Text
        style={{
          top: 30,
          fontSize: 25,
          fontWeight: "bold",
          marginHorizontal: 12,
          textAlign: "center",
        }}
      >
        {/*  the result of Predection*/}
        Model prediction :{"\n\n"}
        {data}
        {/* the result of Predection */}
      </Text>

      <Text
        style={{
          top: 120,
          fontSize: 25,
          fontWeight: "bold",
          marginHorizontal: 12,
          textAlign: "center",
        }}
      >
        {/*  the result of chatResponse*/}
        Group 4 GPT :{"\n\n"}
        {chatResponse}
        {/* the result of chatResponse */}
      </Text>
    </View>
  );
}
