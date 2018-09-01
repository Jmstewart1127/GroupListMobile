import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Groups from './app/components/Groups';
import Lists from './app/components/Lists';
import SingleList from './app/components/SingleList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Groups</Text>
        <Groups/>
        <Text>Lists</Text>
        <Lists/>
        <Text>Items</Text>
        <SingleList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
