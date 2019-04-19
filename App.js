import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import t from 'tcomb-form-native';

const Form = t.form.Form;

const Document= t.struct({
  type: t.String,
  company: t.String,
  policyNumber: t.maybe(t.String),
  renewalDate: t.Date, // a date field
  price: t.maybe(t.String),
  website: t.maybe(t.String),
  autoRenewal: t.maybe(t.Boolean),
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10,
      width: 300
    },
  },
  controlLabel: {
    normal: {
      color: 'blue',
      fontSize: 16,
      marginBottom: 7,
      fontWeight: '600'
    },
    // the style applied when a validation error occours
    error: {
      color: 'red',
      fontSize: 16,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}

const options = {
  fields: {
    renewalDate: {
      mode: 'date' // display the Date field as a DatePickerAndroid
    },
    type: {
      error: 'Please fill in the document type eg. Travel Insurance'
    },
    company: {
      error: 'Please fill in the company name eg. Insure & Go'
    },
  },
  stylesheet: formStyles,
};

export default class App extends React.Component {

  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    console.log('value: ', value);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Beautiful Add Doc Page</Text>
        <Form style={{backgroundColor: 'red'}}
          ref={input => this._form = input} // assign a ref
          type={Document}
          options={options}
        />
        <Button
          title="Add Doc!"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
