import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Button, NativeBaseProvider } from 'native-base';

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
      winMsg = (items.at(0) ? 'Cross' : 'Circle') + ' win!';

    } else if ((items.at(3) !== 'empty') && (items.at(3) === items.at(4)) && items.at(4) === items.at(5)) {
      winMsg = (items.at(3) ? 'Cross' : 'Circle') + ' win!';

    } else if ((items.at(6) !== 'empty') && (items.at(6) === items.at(7)) && items.at(7) === items.at(8)) {
      winMsg = (items.at(6) ? 'Cross' : 'Circle') + ' win!';

    } else if ((items.at(0) !== 'empty') && (items.at(0) === items.at(3)) && items.at(3) === items.at(6)) {
      winMsg = (items.at(0) ? 'Cross' : 'Circle') + ' win!';

    } else if ((items.at(1) !== 'empty') && (items.at(1) === items.at(4)) && items.at(4) === items.at(7)) {
      winMsg = (items.at(1) ? 'Cross' : 'Circle') + ' win!';

    } else if ((items.at(2) !== 'empty') && (items.at(2) === items.at(5)) && items.at(5) === items.at(8)) {
      winMsg = (items.at(2) ? 'Cross' : 'Circle') + ' win!';

    } else if ((items.at(0) !== 'empty') && (items.at(0) === items.at(4)) && items.at(4) === items.at(8)) {
      winMsg = (items.at(0) ? 'Cross' : 'Circle') + ' win!';

    } else if ((items.at(2) !== 'empty') && (items.at(2) === items.at(4)) && items.at(4) === items.at(6)) {
      winMsg = (items.at(2) ? 'Cross' : 'Circle') + ' win!';
    }

    setWinMessage(winMsg);
  };

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Text style={styles.winText}>{winMessage}</Text>
        <View style={styles.grid}>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity
              onPress={() => drawItem(0)}>
                <Entypo
                  name={chooseItemIcon(0)}
                  size={50}
                  color={chooseItemColour(0)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
              onPress={() => drawItem(1)}>
                <Entypo
                  name={chooseItemIcon(1)}
                  size={50}
                  color={chooseItemColour(1)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
              onPress={() => drawItem(2)}>
                <Entypo
                  name={chooseItemIcon(2)}
                  size={50}
                  color={chooseItemColour(2)}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity
              onPress={() => drawItem(3)}>
                <Entypo
                  name={chooseItemIcon(3)}
                  size={50}
                  color={chooseItemColour(3)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
              onPress={() => drawItem(4)}>
                <Entypo
                  name={chooseItemIcon(4)}
                  size={50}
                  color={chooseItemColour(4)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
              onPress={() => drawItem(5)}>
                <Entypo
                  name={chooseItemIcon(5)}
                  size={50}
                  color={chooseItemColour(5)}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity
              onPress={() => drawItem(6)}>
                <Entypo
                  name={chooseItemIcon(6)}
                  size={50}
                  color={chooseItemColour(6)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
              onPress={() => drawItem(7)}>
                <Entypo
                  name={chooseItemIcon(7)}
                  size={50}
                  color={chooseItemColour(7)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity
              onPress={() => drawItem(8)}>
                <Entypo
                  name={chooseItemIcon(8)}
                  size={50}
                  color={chooseItemColour(8)}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Button
          style={styles.button}
          borderRadius={20}
          backgroundColor={'blue.400'}
          onPress={() => resetGame()}
        >
          <Text style={styles.buttonText}>Reset game</Text>
        </Button>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: {

  },
  row: {
    flexDirection: 'row',
  },
  item: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 20,
  },
  winText: {
    padding: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },
  button: {
    margin: 20,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  }
});
