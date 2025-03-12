import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Button,
} from "react-native";
import api from "../axios/axios";

export default function Home({navigation}) {
  const [user, setUser] = useState({

  });

  async function handleHome() {
    await api.postLogin(user).then(
      (response) => {
        Alert.alert("OK", response.data.message);
      },
      (error) => {
        console.log("Error", error.response.data.error);
      }
    );
  }

  return (
    <View style={styles.container}>
      
      <Button title="Cadastro de Evento" onPress={()=> navigation.navigate("CadastroEvento")}/>

      <Button title="Cadastro Organizador" onPress={()=> navigation.navigate("CadastroOrganizador")}/>

      <Button title="Cadastro de Ingresso" onPress={()=> navigation.navigate("CadastroIngresso")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    height: 40,
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "purple",
    padding: 10,
    borderRadius: 5,
  },
});