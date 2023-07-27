import React, { useContext } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import FitnessCards from "../components/FitnessCards";
import { FitnessItems } from "../Context";
import { LinearGradient } from "expo-linear-gradient";

const HomeScreen = () => {
  const { workout, calories, minutes } = useContext(FitnessItems);

  return (
    <ScrollView
      style={{ marginTop: 20 }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <Text
        style={{
          color: "#000428",
          fontWeight: "bold",
          fontSize: 30,
          paddingHorizontal: 50,
        }}
      >
        EAT SLEEP GYM
      </Text>
      <LinearGradient
        colors={["#2c3e50", "#bdc3c7"]}
        style={{ flex: 1, padding: 10, minHeight: "100%", width: "100%" }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
          HOME WORKOUT
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 20,
              }}
            >
              {workout}
            </Text>
            <Text style={{ color: "#D0D0D0", fontSize: 16, marginTop: 8 }}>
              WORKOUTS
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 20,
              }}
            >
              {Math.round(calories) }
            </Text>
            <Text style={{ color: "#D0D0D0", fontSize: 16, marginTop: 8 }}>
              KCAL
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 20,
              }}
            >
              {minutes}
            </Text>
            <Text style={{ color: "#D0D0D0", fontSize: 16, marginTop: 8 }}>
              MINTS
            </Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Image
            style={{ width: "90%", height: 120, borderRadius: 7 }}
            source={{
              uri: "https://media3.giphy.com/media/QNj7J5NI89uBQBIr6m/giphy.gif?cid=ecf05e47edl1nrnm1c6mjkbedo5f3gxsuzxvtcly1bizwdeb&ep=v1_gifs_search&rid=giphy.gif&ct=g",
            }}
          />
        </View>
        <FitnessCards />
      </LinearGradient>
    </ScrollView>
  );
};

export default HomeScreen;
