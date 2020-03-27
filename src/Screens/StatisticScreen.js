import React from "react";
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from "react-native";

function Item({ country, newConfirmed, totalConfirmed, newDeaths, newRecovered, totalRecovered }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>Land: {country}</Text>
      <Text style={styles.title}>Neu bestätigte: {newConfirmed}</Text>
      <Text style={styles.title}>Gesamt bestätigt: {totalConfirmed}</Text>
      <Text style={styles.title}>Neue Tode: {newDeaths}</Text>
      <Text style={styles.title}>Neue genesungen: {newRecovered}</Text>
      <Text style={styles.title}>Insgesamt erholt: {totalRecovered}</Text>
    </View>
  );
}

export default class Statistic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    }
  }

  componentDidMount() {
    return fetch("https://api.covid19api.com/summary")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.Countries
        })
      })
      .catch((error) => {
        console.log(error)
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={StyleSheet.container}>
          <ActivityIndicator/>
        </View>
      );
    } else {
      // let countries = this.state.dataSource.map((val, key) => {
      //   return <View key={key} style={StyleSheet.item}><Text>{val.Country}</Text><Text>{val.Slug}</Text><Text>{val.NewConfirmed}</Text><Text>{val.TotalConfirmed}</Text><Text>{val.NewDeaths}</Text><Text>{val.TotalDeaths}</Text><Text>{val.NewRecovered}</Text><Text>{val.TotalRecovered}</Text></View>
      // });

      return (
        <FlatList 
          data={this.state.dataSource} 
          renderItem={({ item }) => <Item 
                                      country={item.Country} 
                                      newConfirmed={item.NewConfirmed} 
                                      totalConfirmed={item.TotalConfirmed}
                                      newDeaths={item.NewDeaths}
                                      newRecovered={item.NewRecovered}
                                      totalRecovered={item.TotalRecovered}
                                    />}
          keyExtractor={item => item.Country}
        />
      );

      // return (
      //   <View style={StyleSheet.container}>
      //     {countries}
      //   </View>
      // );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});