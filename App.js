import React from "react";
import {Text, Button, View, SafeAreaView, StyleSheet} from "react-native";
import colors from "./src/utils/colors";
import Form from "./src/Components/Form";


export default function App() {

  // const { PRIMARY_COLOR, PRIMARY_COLOR_DARK }  = colors;
  return (
    <>
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.titleApp}>Formulario</Text>
      <Form />

    </SafeAreaView>

    <View>
      <Text>Resultados</Text>
    </View>

    <View>
      <Text>Button</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center"
  },
  titleApp: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15,
  }
})