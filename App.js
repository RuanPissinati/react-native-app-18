
// import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import HeaderComponent from './components/HeaderComponent';
import InputComponent from './components/InputComponent';

import TextComponent from './components/TextComponent';


function App() {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <ScrollView>
       <HeaderComponent />
        <View>
          <TextComponent separator sublime title>Titulo</TextComponent>
          <TextComponent subTitle>SubtituloTitulo</TextComponent>
        </View>
        <View>
          <InputComponent placeholder="e-mail"/>
          <InputComponent placeholder="senha"/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  stylesBar: {
    backgroundColor: 'red',
    paddingHorizontal: 24,
    paddingVertical: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionContainer: {
    flex: 1,
    marginTop: 32,
    // paddingHorizontal: 24,
    borderWidth: 5,
    borderColor: 'greem',
  },
  textTitle: {
    fontSize: 24,
  },
  textSubTitle: {
    fontSize: 18,
  },
  textAlignCenter: {
    textAlign: 'center'
  },
  textDescription: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '400',
    borderWidth: 1,
    borderColor: 'blue',
  },
});

export default App;
