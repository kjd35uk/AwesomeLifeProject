import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, ScrollView, Button } from 'react-native';

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
      fontSize: 15,
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

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Welcome',
  };

  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    console.log('value: ', value);
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <KeyboardAvoidingView behavior="padding" enabled>
        <ScrollView>
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
          <Button
          title="Go to all docs"
          onPress={() => navigate('AllDocs')}
        />
        </ScrollView>
      </KeyboardAvoidingView>

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

