import React from 'react';
import { StyleSheet, View, ScrollView, ActivityIndicator } from 'react-native';
import HTMLView from 'react-native-htmlview';
import Html from '../components/Html';
import { Text, ListItem } from 'native-base';

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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>;
    }
    const {
      name,
      description,
      inCaseOf: { ingestion, eyeSplash, skinContact, inhalation },
    } = params;
    return (
      <ScrollView style={{ flex: 1, padding: 16, backgroundColor: 'white' }}>
        {name && <Text style={{ marginBottom: 8, fontSize: 24 }}>{name}</Text>}
        {description && <Html value={description} {...this.props} />}
        {ingestion && (
          <View>
            <Text style={{ marginBottom: 8, fontSize: 21 }}>Vid förtäring</Text>
            <Html value={ingestion} {...this.props} />
          </View>
        )}
        {eyeSplash && (
          <View>
            <Text style={{ marginBottom: 8, fontSize: 21 }}>Vid ögonstänk</Text>
            <Html value={eyeSplash} {...this.props} />
          </View>
        )}
        {skinContact && (
          <View>
            <Text style={{ marginBottom: 8, fontSize: 21 }}>
              Vid hudkontakt
            </Text>
            <Html value={skinContact} {...this.props} />
          </View>
        )}
        {inhalation && (
          <View>
            <Text style={{ marginBottom: 8, fontSize: 21 }}>Vid inandning</Text>
            <Html value={inhalation} {...this.props} />
          </View>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});
