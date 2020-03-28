import React from "react";
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Image } from "react-native";

import cross from "../img/cross.png"
import arrow from "../img/arrow-up.png"
import healing from "../img/healing.png"
import { opacity } from "react-native-redash";


function Item({ country, newConfirmed, totalConfirmed, newDeaths, newRecovered, totalRecovered }) {
  return (
    <View style={styles.item}>

      
      <Text style={styles.country}>{country}</Text>

      <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
        <View style = {{flex: 1}}>
          <Text style={styles.total}>{totalConfirmed}</Text>
          <View style={{ display: "flex", flexDirection: "row" }}><Image source={arrow} style={styles.iconArrow}></Image><Text style={styles.newTotal}>{newConfirmed}</Text></View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ display: "flex", flexDirection: "row" }}><Image source={cross} style={styles.img}></Image><Text style={styles.death}>{totalConfirmed}</Text></View>
          <View style={{ display: "flex", flexDirection: "row" }}><Image source={arrow} style={styles.iconArrow}></Image><Text style={styles.newDeath}>{newDeaths}</Text></View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ display: "flex", flexDirection: "row" }}><Image source={healing} style={styles.img}></Image><Text style={styles.recovered}>{totalRecovered}</Text></View>
          <View style={{ display: "flex", flexDirection: "row" }}><Image source={arrow} style={styles.iconArrow}></Image><Text style={styles.newRecovered}>{newRecovered}</Text></View>
        </View>
      </View>

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
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    backgroundColor: '#232323',
    padding: 20,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 20
  },
  flag: {
    fontSize: 32,
  },
  country: {
    fontSize: 28,
    color: "white",
    fontWeight: "bold"
  },
  
  img: {
    height: 18,
    width: 18,
    marginRight: 10,
    marginTop: 9
  },
  iconArrow: {
    height: 15,
    width: 15,
    margin: 3,
    marginRight: 13,
    marginTop: 7,

  },
  title: {
    fontSize: 32,
  },
  total: {

    fontSize: 26,
    color: "white",
    fontWeight: "bold"
  },
  newTotal: {
    flex: 1,
    fontSize: 20,
    color: "white",
    opacity: 0.5
  },
  death: {
    fontSize: 26,
    color: "#FF5151",
    fontWeight: "bold"
  },
  newDeath: {
    fontSize: 20,
    color: "#FF5151",
    fontWeight: "bold",
    opacity: 0.5
  },
  recovered: {
    fontSize: 26,
    color: "#82FF7E",
    fontWeight: "bold"
  },
  newRecovered: {
    fontSize: 20,
    color: "#82FF7E",
    fontWeight: "bold",
    opacity: 0.5
  }
});