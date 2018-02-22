import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import _ from 'lodash';
import data from './fixtures/data.json';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ';
export default class App extends React.Component {
  state = {
    dataSource: [...alphabet].map(letter => ({
      data: data.filter(d => d.name.toUpperCase().startsWith(letter)),
      title: letter,
    })),
  };
  keyExtractor = (item, index) => item.id;
  render() {
    return (
      <SectionList
        keyExtractor={this.keyExtractor}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
        sections={this.state.dataSource}
      />
    );
  }
}

const styles = StyleSheet.create({});
