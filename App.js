
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function TextComponent(props) {
  let textStyleSet = {};
  if(props.title){
    textStyleSet = styles.textTitle
  }
  if(props.subTitle){
    textStyleSet = styles.textSubTitle
  }
  if(props.description){
    textStyleSet = styles.textDescription
  }
  return (
    <Text style={[{color: props.color}, {...textStyleSet}]}>{props.children}</Text>
  );
  
}

function App() {
  return (
    <View style={styles.sectionContainer}>
      <View style={{
        backgroundColor: "red",
        paddingHorizontal: 24,
        paddingVertical: 24,
        flexDirection: "row",
        justifyContent: "space-between",
      }}>
        <View>
          <TextComponent color="white">X</TextComponent>
        </View>
        <View>
          <TextComponent color="white">Title Page</TextComponent>
        </View>
        <View>
          <TextComponent color="white">-></TextComponent>
        </View>
      </View>

      <View >
        <TextComponent title>Titulo</TextComponent>
        <TextComponent subTitle>SubtituloTitulo</TextComponent>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    marginTop: 32,
    // paddingHorizontal: 24,
    borderWidth: 5,
    borderColor: "greem",
  },
  textTitle: {
    fontSize: 24,
  },
  textSubTitle: {
    fontSize: 18,
  },
  textDescription: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '400',
    borderWidth: 1,
    borderColor: "blue",
  },
});

export default App;
