import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Button } from 'native-base';

let items: string[] | boolean[] = new Array(9).fill('empty');

export default function App() {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState('');

  const drawItem = (itemIndex: number) => {
    if (items.at(itemIndex) === 'empty') {
      items[itemIndex] = isCross;
      setIsCross(!items.at(itemIndex));
    }

    //TODO Check for win
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
