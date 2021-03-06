import React from 'react';
import HTMLView from 'react-native-htmlview';
import { human } from 'react-native-typography';
import poisons from '../fixtures/data.json';

export default class Html extends React.Component {
  render() {
    return (
      <HTMLView
        value={this.props.value}
        stylesheet={{
          p: [human.body, { marginBottom: 16 }],
          h2: { fontSize: 21, marginBottom: 8 },
          h3: { fontSize: 21 },
          h4: { fontSize: 21 },
          li: human.body,
        }}
        bullet={'• '}
        addLineBreaks={false}
        onLinkPress={url => {
          const poison = poisons.find(p => p.url.endsWith(url));
          this.props.navigation.push('Details', { ...poison });
        }}
      />
    );
  }
}
