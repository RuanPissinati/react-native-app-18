import react from 'react';
import {View, StyleSheet} from 'react-native';
import TextComponent from '../TextComponent';

export default function HeaderComponent() {
  return (

    <View style={styles.stylesBar}>
      <View>
        <TextComponent color='white'>X</TextComponent>
      </View>
      <View>
        <TextComponent color='white'>Title Page</TextComponent>
      </View>
      <View>
        <TextComponent bold color='white'>-></TextComponent>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  stylesBar: {
    backgroundColor: '#090',
    paddingHorizontal: 24,
    paddingVertical: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
