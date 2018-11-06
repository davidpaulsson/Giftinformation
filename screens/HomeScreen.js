import React from 'react';
import { StyleSheet, View, SectionList, TouchableOpacity } from 'react-native';
import _ from 'lodash';
import colors from '../utils/colors';
import json from '../fixtures/data.json';
import { human } from 'react-native-typography';
import { Text, ListItem } from 'native-base';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ';
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Giftinformation',
  };
  state = {
    dataSource: _.compact(
      [...alphabet].map(title => {
        const data = json.filter(d => d.name.toUpperCase().startsWith(title));
        if (data.length === 0) {
          return false;
        }
        return {
          data,
          title,
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
            <ListItem
              onPress={() => {
                this.props.navigation.navigate('Details', { ...item });
              }}
            >
              <Text style={human.body}>{item.name}</Text>
            </ListItem>
          )}
          renderSectionHeader={({ section }) => (
            <ListItem itemDivider>
              <Text style={human.body}>{section.title}</Text>
            </ListItem>
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
});
