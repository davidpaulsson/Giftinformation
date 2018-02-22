import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: params ? params.name : null,
    };
  };
  render() {
    const { params } = this.props.navigation.state;
    const name = params ? params.name : null;
    const description = params ? params.description : null;
    return (
      <View style={{ flex: 1, padding: 16 }}>
        <Text style={{ fontWeight: '700', marginBottom: 16, fontSize: 17 }}>{name}</Text>
        <Text>{description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
