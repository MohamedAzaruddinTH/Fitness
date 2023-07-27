import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Fitness from "../data/fitness";
import { FitnessItems } from "../Context";
import { AntDesign } from "@expo/vector-icons";

const WorkoutScreen = () => {
  const route = useRoute();
  //   console.log(route.params);
  const navigation = useNavigation();
  const { completed, setCompleted } = useContext(FitnessItems);

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "white", marginTop: 62 }}
      >
        <Image
          style={{ width: "100%", height: 170 }}
          source={{ uri: route.params.image }}
        />
        <Ionicons
          onPress={() => navigation.goBack()}
          style={{ position: "absolute", top: 30, left: 20, zIndex: 1 }}
          name="arrow-back-outline"
          size={28}
          color="white"
        />
        {route.params.excersises.map((item, index) => (
          <Pressable
            style={{ margin: 10, flexDirection: "row", alignItems: "center" }}
            key={index}
          >
            <Image
              style={{ width: 120, height: 90 }}
              source={{ uri: item.image }}
            />
            <View>
              <Text
                style={{ marginLeft: 10, fontSize: 15, fontWeight: "bold",width:170 }}
              >
                {item.name}
              </Text>

              <Text style={{left:10,top: 4, fontSize: 17, color: "grey" }}>
                x{item.sets}
              </Text>
            </View>
            {completed.includes(item.name) ? (
              <AntDesign style={{marginLeft:5}}name="checkcircle" size={24} color="green" />
            ) : null}
          </Pressable>
        ))}
      </ScrollView>
      <Pressable
        onPress={()=>{
          navigation.navigate("Fit",{
            excersises:route.params.excersises,
          })
          setCompleted([])
        }}
      
        style={{
          backgroundColor: "#000428",
          padding: 10,
          marginLeft: "auto",
          marginRight: "auto",
          marginVertical: 20,
          borderRadius: 6,
          width: 120,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 15,
            fontWeight: "600",
          }}
        >
          START
        </Text>
      </Pressable>
    </>
  );
};

export default WorkoutScreen;

const styles = StyleSheet.create({});
