import { StyleSheet,Text, View,TextInput } from "react-native";

type InputContainerProps = {
    titulo: string;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean; // esconder a senha
  };

export default function InputContainer({ titulo, value, onChangeText, secureTextEntry = false }: InputContainerProps) {

 return (
    <View>
        <Text style={style.title}>{titulo}</Text>
        <TextInput
            style={style.input}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
        ></TextInput>
    </View>
  );
}

const style = StyleSheet.create({
    input:{
        borderRadius:10,
        backgroundColor:"#EBEBEB",
        width:"100%",
        padding:10

    },
    title:{
        textAlign: "left",
        textTransform: "uppercase",
        color:"white",
        padding:5
    }
  }
);
