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

    winGame();
  };

  const chooseItemIcon = (itemIndex: number) => {
    if (items.at(itemIndex) !== 'empty') {
      return items[itemIndex] ? 'cross' : 'circle';
    } else {
      return 'pencil';
    }
  };

  const chooseItemColour = (itemIndex: number) => {
    if (items.at(itemIndex) !== 'empty') {
      return items[itemIndex] ? 'orange' : 'blue';
    } else {
      return 'black';
    }
  };

  const resetGame = () => {
    items = new Array(9).fill('empty');
    setWinMessage('');
  };

  const winGame = () => {
    let winMsg: string = '';

    if ((items.at(0) !== 'empty') && (items.at(0) === items.at(1)) && items.at(1) === items.at(2)) {
      winMsg = (items.at(0) ? 'cross' : 'circle') + ' win!';

    } else if ((items.at(3) !== 'empty') && (items.at(3) === items.at(4)) && items.at(4) === items.at(5)) {
      winMsg = (items.at(3) ? 'cross' : 'circle') + ' win!';

    } else if ((items.at(6) !== 'empty') && (items.at(6) === items.at(7)) && items.at(7) === items.at(8)) {
      winMsg = (items.at(6) ? 'cross' : 'circle') + ' win!';

    } else if ((items.at(0) !== 'empty') && (items.at(0) === items.at(3)) && items.at(3) === items.at(6)) {
      winMsg = (items.at(0) ? 'cross' : 'circle') + ' win!';

    } else if ((items.at(1) !== 'empty') && (items.at(1) === items.at(4)) && items.at(4) === items.at(7)) {
      winMsg = (items.at(1) ? 'cross' : 'circle') + ' win!';

    } else if ((items.at(2) !== 'empty') && (items.at(2) === items.at(5)) && items.at(5) === items.at(8)) {
      winMsg = (items.at(2) ? 'cross' : 'circle') + ' win!';

    } else if ((items.at(0) !== 'empty') && (items.at(0) === items.at(4)) && items.at(4) === items.at(8)) {
      winMsg = (items.at(0) ? 'cross' : 'circle') + ' win!';

    } else if ((items.at(2) !== 'empty') && (items.at(2) === items.at(4)) && items.at(4) === items.at(6)) {
      winMsg = (items.at(2) ? 'cross' : 'circle') + ' win!';
    }

    setWinMessage(winMsg);
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
