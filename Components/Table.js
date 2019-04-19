import React from 'react';
import { StyleSheet, Text, ScrollView, View, Button, Row, FlatList } from 'react-native';

export default class Table extends React.Component {

  render() {
      const data = this.props.data
      return (
        <FlatList
          styles={styles}
          data={data}
          renderItem={({item, i}) =>
            <View style={styles.View} key={i}>
              <Text style={styles.Text}>{item.type}</Text>
              <Text>{item.company} - {item.website}</Text>
              <Text>Policy: {item.policyNumber}</Text>
              <Text style={styles.Renewal}>Renewal: {item.renewalDate} ({item.autoRenewal.toString()})</Text>
              <Text>Price: {item.price}</Text>
            </View>
          }
          keyExtractor={(item, i) => i.toString()}
        />
      )
    }
  }

  const styles = {
    Renewal : {
      color: 'purple',
      fontSize: 15,
      fontWeight: 'bold',
    },

    Text : {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      width: 250
    },

    View: {
      alignItems: "center",
      backgroundColor: 'rgba(255, 255, 255, .7)',
      borderColor: 'purple',
      borderRadius: 10,
      borderWidth: 3,
      justifyContent: "center",
      margin: 5,
      padding: 5
    }
  }
