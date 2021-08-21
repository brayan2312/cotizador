import React, {useState} from "react";
import {Text, Button, View, SafeAreaView, StyleSheet} from "react-native";
import colors from "./src/utils/colors";
import Form from "./src/Components/Form";
import Footer from "./src/Components/Footer";


export default function App() {

  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);

  const onSubmit =  () => {
    console.log("capital -> " + capital);
    console.log("interest -> " + interest);
    console.log("months -> " + months);

    if(!capital){
      console.log("Añade la cantidad que quieres solicitar");
    }else if(!interest){
      console.log("Añade el interes del prestamo");
    }else if(!months){
      console.log("Selecciona los plazos");
    }else{

    }
  }
  return (
    <>
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.backgraund} />
      <Text style={styles.titleApp}>Formulario</Text>
      <Form setCapital={setCapital} setInterest={setInterest} setMonths={setMonths}/>

    </SafeAreaView>

    <View>
      <Text>Resultados</Text>
    </View>

    <Footer onSubmit={onSubmit} />
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: 290,
    alignItems: "center"
  },
  backgraund: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    zIndex: -1,
    position: "absolute",
  },
  titleApp: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15,

  }
})