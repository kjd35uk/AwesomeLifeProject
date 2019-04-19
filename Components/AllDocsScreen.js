import React from 'react';
import { StyleSheet, Text, View, Button, Picker } from 'react-native';
import Table from './Table';
import BackgroundImage from './BackgroundImage';

class AllDocsScreen extends React.Component {

  sortData = (sortBy) =>  {
    let sort = sortBy.toString()

    const propComparator = (propName) =>
    (a, b) => a[propName] == b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1

    let dataSorted = [...this.state.data].sort((propComparator(sort)));
    this.setState({data: dataSorted})
  }

  static navigationOptions = {
    title: 'All Your Docs',
  };

  state = {
    sortBy: '',
    data:
    [{
      type: 'Contents Insurance',
      company: 'Natwest',
      policyNumber: '1234556',
      renewalDate: '24/04/2019',
      price: '20.00',
      website: 'www.natwest.co.uk',
      autoRenewal: false,
    },
      {
      type: 'Travel Insurance',
      company: 'Insure & Go',
      policyNumber: 'M123/556/7787',
      renewalDate: '25/04/2019',
      price: '213.45',
      website: 'www.insureandgo.com',
      autoRenewal: true,
    },
    {
      type: 'Home Insurance',
      company: 'Santander',
      policyNumber: 'SA123457',
      renewalDate: '28/08/2019',
      price: '42.45',
      website: 'www.santander.com',
      autoRenewal: true,
    }]
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <BackgroundImage>
        <View style={styles.container}>
          <Picker
            selectedValue={this.state.sortBy}
            style={{height: 50, width: 100}}
            onValueChange={(itemValue, itemIndex) => {
              // console.log(itemValue)
              this.setState({sortBy: itemValue})
            }}
          >
            <Picker.Item label="Type" value="type" />
            <Picker.Item label="Company" value="company" />
            <Picker.Item label="Renewal Date" value="renewalDate" />
          </Picker>
          <Button
            title="Sort"
            onPress={() => this.sortData(this.state.sortBy)}
          />
          <Table data={this.state.data}/>
          <Button
            title="Go to HomeScreen"
            onPress={() => navigate('Home')}
          />
        </View>
      </BackgroundImage>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AllDocsScreen;
