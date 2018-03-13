import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
      },
      keypad: {
        fontSize: 24,
        color: '#ffffff'
      },
      input: {
        fontSize: 24,
        color: '#000000'
      },
      result: {
        fontSize: 40,
        color: '#000000'
      },
      calcCell:{
          borderWidth: 1,
          borderStyle:'solid',
          borderColor:'#212121',
          backgroundColor:'#FFC408'
      },
      buttonCell:{
          borderWidth: 1,
          borderStyle:'solid',
          borderColor:'#212121',
          backgroundColor:'#282828'
      },
      mathCell:{
          borderWidth: 1,
          borderStyle:'solid',
          borderColor:'#212121',
          backgroundColor:'#313131'
      }
});

export default styles;