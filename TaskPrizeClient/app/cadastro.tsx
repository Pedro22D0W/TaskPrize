import { StyleSheet, View } from "react-native";
import InputContainer from "./components/InputContainer";
import { useState } from "react";
import ButtonType1 from "./components/buttonType1";
import { router } from "expo-router";
import { cadastro } from "./services/task-prize-api";
import React from "react";





export default function CadastroPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    try {
      const response = await cadastro(name, email, password);
      console.log(response?.data); // Agora, se o cadastro for bem-sucedido, ele vai mostrar os dados retornados
      if (response) {
        router.push("/login"); // Redireciona se o cadastro foi bem-sucedido
      } else {
        console.log("Cadastro falhou, sem resposta válida");
      }
    } catch (error) {
      console.log("Erro ao realizar cadastro:", error); // Exibe o erro detalhado
    }
  };
  

  const style = StyleSheet.create({
    container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8084A9",
    padding:10
    },
    LoginContainer:{
      justifyContent: "center",
      width:"100%",
      height:"40%",
      backgroundColor:"#3E4465",
      padding:10,
      borderRadius:25
    },
    ButtonsContainer:{
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      margin:10
    }
  })
  return (
    <View style={style.container}>
      <View style={style.LoginContainer}>
        <InputContainer titulo="Nome:" value={name} onChangeText={setName} />
        <InputContainer titulo="E-mail:" value={email} onChangeText={setEmail} />
        <InputContainer titulo="Senha:" value={password} onChangeText={setPassword} secureTextEntry />
        <View style={style.ButtonsContainer}>
         <ButtonType1 titulo="CADASTRAR" onPress={signup}></ButtonType1>
        </View>
      </View>
    </View>
  );
}