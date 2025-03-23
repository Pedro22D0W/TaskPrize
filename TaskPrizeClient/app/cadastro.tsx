import { StyleSheet, View } from "react-native";
import InputContainer from "./components/InputContainer";
import { useState } from "react";
import ButtonType1 from "./components/buttonType1";
import { router } from "expo-router";
import { cadastro } from "./services/task-prize-api";





export default function CadastroPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const signup = async () => {
    try {
      cadastro(nome,email,senha);
      router.push("/login");
    } catch (error) {
      console.log("erro ao realizar cadastro")
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
        <InputContainer titulo="Nome:" value={nome} onChangeText={setNome} />
        <InputContainer titulo="E-mail:" value={email} onChangeText={setEmail} />
        <InputContainer titulo="Senha:" value={senha} onChangeText={setSenha} secureTextEntry />
        <View style={style.ButtonsContainer}>
         <ButtonType1 titulo="CADASTRAR" onPress={signup}></ButtonType1>
        </View>
      </View>
    </View>
  );
}