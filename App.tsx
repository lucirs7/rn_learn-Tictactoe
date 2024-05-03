import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [isCross, setIsCross] = useState();
  const [winMessage, setWinMessage] = useState();

  const drawItem = () => {
    //TODO Decide what to draw: circle or cross or default.
  };

  const chooseItemIcon = () => {
    //TODO Choose appropriate icon
  };

  const chooseItemColour = () => {
    //TODO Chose colour for icon
  };

  const resetGame = () => {
    //TODO Reset all values and states
  };

  const winGame = () => {
    //TODO Decide/Check winner
  };

  return (
    <View style={styles.container}>
      <Text>Tic Tac Toe!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
