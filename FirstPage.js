import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import axios from "axios";

console.log(1222222222222);
const FirstPage = ({ navigation }) => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [smoking, setSmoking] = useState(true);
  const [cigarettesPerDay, setCigarettesPerDay] = useState("");
  const [bloodPressureMedication, setBloodPressureMedication] = useState("");
  const [diabetes, setDiabetes] = useState("");
  const [stroke, setStroke] = useState("");
  const [hypertensive, setHypertensive] = useState("");
  const [totalCholesterol, setTotalCholesterol] = useState("");
  const [bmi, setBMI] = useState("");
  const [diastolicBP, setDiastolicBP] = useState("");
  const [systolicBP, setSystolicBP] = useState("");
  const [heartRate, setHeartRate] = useState("");
  const [glucose, setGlucose] = useState("");
  const options1 = ["Male", "Female"];
  const options = ["Yes", "No"];

  const handleAgeChange = (text) => {
    setAge(text);
  };

  const handleCigChange = (text) => {
    setCigarettesPerDay(text);
  };

  const handleCholesterolChange = (text) => {
    setTotalCholesterol(text);
  };

  const handleBMIChange = (text) => {
    setBMI(text);
  };

  const handleDiastolicChange = (text) => {
    setDiastolicBP(text);
  };

  const handleSystolicChange = (text) => {
    setSystolicBP(text);
  };

  const handleHeartChange = (text) => {
    setHeartRate(text);
  };

  const handleGlucoseChange = (text) => {
    setGlucose(text);
  };

  const handleSubmit = async () => {
    let model = "";
    // plus opretor is to convert the text input to number
    const dataSend = {
      Gender: gender ? 1 : 0,
      Age: +age,
      CigsPerDay: +cigarettesPerDay,
      TotChol: +totalCholesterol,
      SysBP: +systolicBP,
      Glucose: +glucose,
    };
    const apiUrl = "https://f720-35-229-153-27.ngrok-free.app/Heart_PR"; //api endpoint

    const postrequest = await axios
      .post(apiUrl, dataSend)
      .then((response) => {
        console.log("Result:", response.data); //response data = the result
        const data = response.data;
        model = data;
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    const apiUrlGPT = "https://api.openai.com/v1/chat/completions";
    const apiKey = "Chat GPT API";
    const headers = {
      "content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    };

    const data = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `User: Age = ${age} Gender = ${gender} Smoker = ${smoking} cigarettesPerDay = ${cigarettesPerDay} bloodPressureMedication = ${bloodPressureMedication} diabetes = ${diabetes} stroke = ${stroke} hypertensive = ${hypertensive} totalCholesterol = ${totalCholesterol} bmi = ${bmi} diastolicBP =  ${diastolicBP} systolicBP = ${systolicBP} heartRate = ${heartRate} glucose = ${glucose} . Can you predict if this person may have heart disease or not(Direct answer)?`,
        },
      ],
    };
    const response = await fetch(apiUrlGPT, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    });
    result = await response.json();
    const chatResponse = result.choices[0].message.content;
    navigation.navigate("SecondPage", {
      chatResponse: chatResponse,
      data: model,
    });
  };

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#839EC8" }}>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            color: "#1C2B49",
            fontSize: 30,
            fontWeight: "bold",
            marginBottom: 16,
          }}
        >
          Enter Your Details
        </Text>
      </View>
      <View style={styles.containerinput}>
        <Text
          style={{
            alignItems: "center",
            color: "#1C2B49",
            fontWeight: "bold",
          }}
        >
          Age:{"             "}
        </Text>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            marginBottom: 16,
            paddingHorizontal: 8,
            width: "30%",
            borderRadius: 20,
            backgroundColor: "white",
          }}
          keyboardType="numeric"
          returnKeyType="done"
          placeholder="Age"
          value={age}
          onChangeText={handleAgeChange}
        />

        <Text
          style={{
            alignItems: "center",
            color: "#1C2B49",
            fontWeight: "bold",
          }}
        >
          {" "}
          Cig Per Day:{" "}
        </Text>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            marginBottom: 16,
            paddingHorizontal: 8,
            width: "30%",
            borderRadius: 20,
            backgroundColor: "white",
          }}
          placeholder="Cigarettes"
          keyboardType="numeric"
          returnKeyType="done"
          value={cigarettesPerDay}
          onChangeText={handleCigChange}
        />
      </View>

      <View style={styles.containerinput}>
        <Text
          style={{
            alignItems: "center",
            color: "#1C2B49",
            fontWeight: "bold",
          }}
        >
          BMI:{"             "}
        </Text>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            marginBottom: 16,
            paddingHorizontal: 8,
            width: "30%",
            borderRadius: 20,
            backgroundColor: "white",
          }}
          placeholder="BMI"
          keyboardType="numeric"
          returnKeyType="done"
          value={bmi}
          onChangeText={handleBMIChange}
        />

        <Text
          style={{
            alignItems: "center",
            color: "#1C2B49",
            fontWeight: "bold",
          }}
        >
          {" "}
          Cholesterol:{" "}
        </Text>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            marginBottom: 16,
            paddingHorizontal: 8,
            width: "30%",
            borderRadius: 20,
            backgroundColor: "white",
          }}
          placeholder="Cholesterol"
          keyboardType="numeric"
          returnKeyType="done"
          value={totalCholesterol}
          onChangeText={handleCholesterolChange}
        />
      </View>
      <View style={styles.containerinput}>
        <Text
          style={{
            alignItems: "center",
            color: "#1C2B49",
            fontWeight: "bold",
          }}
        >
          Glucose:{"     "}
        </Text>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            marginBottom: 16,
            paddingHorizontal: 8,
            width: "30%",
            borderRadius: 20,
            backgroundColor: "white",
          }}
          placeholder="Glucose"
          keyboardType="numeric"
          returnKeyType="done"
          value={glucose}
          onChangeText={handleGlucoseChange}
        />

        <Text
          style={{
            alignItems: "center",
            color: "#1C2B49",
            fontWeight: "bold",
          }}
        >
          {" "}
          Systolic BP:{" "}
        </Text>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            marginBottom: 16,
            paddingHorizontal: 8,
            width: "30%",
            borderRadius: 20,
            backgroundColor: "white",
          }}
          placeholder="Blood Pressure"
          keyboardType="numeric"
          returnKeyType="done"
          value={systolicBP}
          onChangeText={handleSystolicChange}
        />
      </View>
      <View style={styles.containerinput}>
        <Text
          style={{
            alignItems: "center",
            color: "#1C2B49",
            fontWeight: "bold",
          }}
        >
          Heart Rate:
        </Text>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            marginBottom: 16,
            paddingHorizontal: 8,
            width: "30%",
            borderRadius: 20,
            backgroundColor: "white",
          }}
          placeholder="Heart Rate"
          keyboardType="numeric"
          returnKeyType="done"
          value={heartRate}
          onChangeText={handleHeartChange}
        />

        <Text
          style={{
            alignItems: "center",
            color: "#1C2B49",
            fontWeight: "bold",
          }}
        >
          {" "}
          Diastolic BP:
        </Text>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            marginBottom: 16,
            paddingHorizontal: 8,
            width: "30%",
            borderRadius: 20,
            backgroundColor: "white",
          }}
          placeholder="Blood Pressure"
          keyboardType="numeric"
          returnKeyType="done"
          value={diastolicBP}
          onChangeText={handleDiastolicChange}
        />
      </View>
      <View style={styles.containerinput}>
        <View style={styles.genderContainer}>
          <Text style={styles.details}> Gender : </Text>
          {options1.map((option1) => {
            return (
              <TouchableOpacity
                key={option1}
                style={styles.singleOptionContainer}
                onPress={() => setGender(option1)}
              >
                <View style={styles.outerCircle}>
                  {gender === option1 ? (
                    <View style={styles.innerCircle} />
                  ) : null}
                </View>
                <Text style={styles.details}>{option1}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.genderContainer}>
          <Text style={styles.details}> Smoker : </Text>
          {options.map((option2) => {
            return (
              <TouchableOpacity
                key={option2}
                style={styles.singleOptionContainer}
                onPress={() => setSmoking(option2)}
              >
                <View style={styles.outerCircle}>
                  {smoking === option2 ? (
                    <View style={styles.innerCircle} />
                  ) : null}
                </View>
                <Text style={styles.details}>{option2}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <View style={styles.containerinput}>
        <View style={styles.genderContainer}>
          <Text style={styles.details}> BP Medication : </Text>
          {options.map((option) => {
            return (
              <TouchableOpacity
                key={option}
                style={styles.singleOptionContainer}
                onPress={() => setBloodPressureMedication(option)}
              >
                <View style={styles.outerCircle}>
                  {bloodPressureMedication === option ? (
                    <View style={styles.innerCircle} />
                  ) : null}
                </View>
                <Text style={styles.details}>{option}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.genderContainer}>
          <Text style={styles.details}> Diabetes : </Text>
          {options.map((option) => {
            return (
              <TouchableOpacity
                key={option}
                style={styles.singleOptionContainer}
                onPress={() => setDiabetes(option)}
              >
                <View style={styles.outerCircle}>
                  {diabetes === option ? (
                    <View style={styles.innerCircle} />
                  ) : null}
                </View>
                <Text style={styles.details}>{option}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <View style={styles.containerinput}>
        <View style={styles.genderContainer}>
          <Text style={styles.details}> Stroke : </Text>
          {options.map((option) => {
            return (
              <TouchableOpacity
                key={option}
                style={styles.singleOptionContainer}
                onPress={() => setStroke(option)}
              >
                <View style={styles.outerCircle}>
                  {stroke === option ? (
                    <View style={styles.innerCircle} />
                  ) : null}
                </View>
                <Text style={styles.details}>{option}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.genderContainer}>
          <Text style={styles.details}> Hypertensive : </Text>
          {options.map((option) => {
            return (
              <TouchableOpacity
                key={option}
                style={styles.singleOptionContainer}
                onPress={() => setHypertensive(option)}
              >
                <View style={styles.outerCircle}>
                  {hypertensive === option ? (
                    <View style={styles.innerCircle} />
                  ) : null}
                </View>
                <Text style={styles.details}>{option}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <TouchableOpacity
        onPress={handleSubmit}
        style={{
          backgroundColor: "#0A0790",
          padding: 10,
          alignItems: "center",
          borderRadius: 25,
        }}
      >
        <Text style={{ color: "white", fontSize: 18 }}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  containerinput: {
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  details: {
    alignItems: "center",
    fontWeight: "bold",
    color: "#1C2B49",
  },
  genderContainer: {
    marginBottom: -10,
    marginLeft: 40,
    width: "50%",
    flexDirection: "column",
  },
  singleOptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 5,
  },
  outerCircle: {
    width: 25,
    height: 25,
    marginTop: 3,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#0A0790",
    justifyContent: "center",
    alignItems: "center",
  },
  innerCircle: {
    width: 15,
    height: 15,
    borderRadius: 11,
    backgroundColor: "#0A0790",
  },
});
export default FirstPage;
