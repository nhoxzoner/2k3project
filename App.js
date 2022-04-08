import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  TouchableNativeFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import {Header, TodoItem, AddTodo} from './src/index';

// [
//   {text: 'buy gift for mom', key: '1'},
//   {text: 'do exercise', key: '2'},
//   {text: 'play badminton', key: '3'},
//   {text: 'do homework', key: '4'},
//   {text: 'go fishing', key: '5'},
//   {text: 'hunting sale', key: '6'},
// ]
export default function App() {
  const [todos, setTodos] = useState('');

  const pressHandler = key => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };
  const submitHandler = text => {
    if (text.length > 0) {
      setTodos(prevTodos => {
        return [{text: text, key: Math.random().toString()}, ...prevTodos];
      });
    } else {
      Alert.alert('OOPS!', 'Please entry todos!', [
        {text: 'Understood', onPress: () => console.log('alert closed')},
      ]);
    }
  };

  return (
    <TouchableNativeFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('dismissed keyboard');
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.contenttodo}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
        <View style={styles.contentdone}>
          <Text style={styles.manual}>User manual</Text>
          <ScrollView>
            <Text>This App is used to take notes of to-dos:</Text>
            <Text>
              - Please enter the tasks you need to remember to do in the "New
              todo..." form.
            </Text>
            <Text>- Then press the "ADD TODO" button.</Text>
            <Text>
              - The task you just added will appear at the top of the list in
              the box below.
            </Text>
            <Text>
              - When the job is done, tap the job to make it disappear from the
              frame.
            </Text>
          </ScrollView>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // height: "120%"
  },
  contenttodo: {
    paddingTop: 20,
    paddingLeft: 40,
    paddingBottom: 10,
    paddingRight: 40,
    flex: 5,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
  contentdone: {
    paddingTop: 10,
    paddingLeft: 40,
    paddingBottom: 10,
    paddingRight: 40,
    flex: 1,
    fontSize: 16,
  },
  manual: {
    fontSize: 16,
    fontWeight: 'bold',
    // textShadowColor:'#000',
    color: '#ffd000',
  },
});
