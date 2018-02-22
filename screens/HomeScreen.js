import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  TouchableOpacity,
} from 'react-native';
import _ from 'lodash';
import colors from '../utils/colors';
import json from '../fixtures/data.json';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ';
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  state = {
    dataSource: _.compact(
      [...alphabet].map(letter => {
        const data = json.filter(d => d.name.toUpperCase().startsWith(letter));
        if (data.length === 0) {
          return false;
        }
        return {
          data,
          title: letter,
        };
      })
    ),
  };
  keyExtractor = (item, index) => item.id;
  render() {
    return (
      <View style={styles.wrapper}>
        <SectionList
          keyExtractor={this.keyExtractor}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Details', { ...item });
              }}
            >
              <View style={styles.listItem}>
                <Text>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
          renderSectionHeader={({ section }) => (
            <View style={styles.listHeader}>
              <Text>{section.title}</Text>
            </View>
          )}
          sections={this.state.dataSource}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
  },
  listHeader: {
    paddingTop: 16,
    marginHorizontal: 16,
    backgroundColor: 'white',
  },
  listItem: {
    backgroundColor: colors.white,
    marginTop: StyleSheet.hairlineWidth,
    marginHorizontal: 16,
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
});
