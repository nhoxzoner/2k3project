import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    height: 50,
    paddingTop: 10,
    backgroundColor: '#ffd000',
  },
  title: {
    textAlign: 'center',
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
