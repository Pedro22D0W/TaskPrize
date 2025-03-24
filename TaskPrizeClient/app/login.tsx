import { StyleSheet, View } from "react-native";
import InputContainer from "./components/InputContainer";
import { useEffect, useState } from "react";
import { login } from "./services/task-prize-api";
import ButtonType1 from "./components/buttonType1";
import { router } from "expo-router";
import { useAuth } from "@/context/AuthContext";
import React from "react";



export default function LoginPage() {
  const { token,setToken } = useAuth();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const sign = async () => {

    const response = await login(email,senha);
    console.log("token de autenticacao:",response.token);
      if (response.token) {
        setToken(response.token);
      } else {
        alert('Falha no login');
      }
  };

  useEffect(() => {
    console.log("Token atualizado no contexto:", token);
    if (token) {
      router.push("/screens/home"); // Agora podemos redirecionar
    }
  }, [token]);
  
  const cadastro = async () => {
    router.push("/cadastro");
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
        <InputContainer titulo="E-mail:" value={email} onChangeText={setEmail} />
        <InputContainer titulo="Senha:" value={senha} onChangeText={setSenha} secureTextEntry />
        <View style={style.ButtonsContainer}>
         <ButtonType1 titulo="ENTRAR" onPress={sign}></ButtonType1>
         <ButtonType1 titulo="CADASTRAR" onPress={cadastro}></ButtonType1>
        </View>
      </View>
    </View>
  );
}