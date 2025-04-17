import { StyleSheet, View,TouchableOpacity,Text } from "react-native";

type ButtonType1 = {
    titulo: string;
    onPress: () => void;
  };

export default function ButtonType1({ titulo,onPress }: ButtonType1) {

 return (
    <View>
         <TouchableOpacity style={style.Button} onPress={onPress}>
            <Text style={style.buttonText}>{titulo}</Text>
         </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
    Button: {
        backgroundColor: "#B1C7D7",
        padding: 10,
        borderRadius: 5,
        width: "80%",
        alignItems: "center",
        marginHorizontal:15,
      },
      buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
      },
    }
);