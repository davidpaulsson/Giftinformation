import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import HTMLView from 'react-native-htmlview';
import { human } from 'react-native-typography';
import Html from '../components/Html';

export default class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: params ? params.name : null,
    };
  };
  render() {
    const { params } = this.props.navigation.state;
    if (!params) {
      <Text>Loading</Text>;
    }
    const {
      name,
      description,
      inCaseOf: { ingestion, eyeSplash, skinContact, inhalation },
    } = params;
    return (
      <ScrollView style={{ flex: 1, padding: 16 }}>
        {name && (
          <Text style={[human.title1, { marginBottom: 8 }]}>{name}</Text>
        )}
        {description && <Html value={description} {...this.props} />}
        {ingestion && (
          <View>
            <Text style={[human.title2, { marginBottom: 8 }]}>Vid förtäring</Text>
            <Html value={ingestion} {...this.props} />
          </View>
        )}
        {eyeSplash && (
          <View>
            <Text style={[human.title2, { marginBottom: 8 }]}>Vid ögonstänk</Text>
            <Html value={eyeSplash} {...this.props} />
          </View>
        )}
        {skinContact && (
          <View>
            <Text style={[human.title2, { marginBottom: 8 }]}>Vid hudkontakt</Text>
            <Html value={skinContact} {...this.props} />
          </View>
        )}
        {inhalation && (
          <View>
            <Text style={[human.title2, { marginBottom: 8 }]}>Vid inandning</Text>
            <Html value={inhalation} {...this.props} />
          </View>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});
