import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Text, Image, I18nManager, AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppIntroSlider from 'react-native-app-intro-slider';
import RealApp from "./RealApp";

I18nManager.forceRTL(false);

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  image: {
    width: 320,
    height: 320,
  },
  text: {
    color: "white",
    backgroundColor: "transparent",
    textAlign: "center",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    color: "white",
    backgroundColor: "transparent",
    textAlign: "center",
    marginBottom: 16,
  },
});

const slides = [
  {
    key: "somethun",
    title: "Helpy finds your contact persons.",
    text: "As long as Helpy is open, we will find contact persons.",
    icon: "ios-search",
    colors: ["#FF6366", "#FF6366"],
  },
  {
    key: "somethun1",
    title: "Are you infected?",
    text: "If you are infected then hold the button and Helpy notifies your contact persons.",
    icon: "ios-contacts",
    colors: ["#EB4E68", "#EB4E68"],
  },
  {
    key: "somethun2",
    title: "Finished",
    text: "You are ready to go.\n Remember your data is save and anonymous.",
    icon: "ios-checkmark-circle-outline",
    colors: ["#2F2E41", "#2F2E41"],
  },
];

export default class App extends React.Component {
  // componentDidMount() {
  //   AsyncStorage.getItem("first_item").then((value) => {
  //     this.setState({ showRealApp: value });
  //   });
  // }
  state = { showRealApp: false };
  _renderItem = ({ item, dimensions }) => (
    <LinearGradient
      style={[
        styles.mainContent,
        {
          flex: 1,
          paddingTop: item.topSpacer,
          paddingBottom: item.bottomSpacer,
          width: dimensions.width,
        },
      ]}
      colors={item.colors}
      start={{ x: 0, y: 0.1 }}
      end={{ x: 0.1, y: 1 }}
    >
      <Ionicons
        style={{ backgroundColor: 'transparent' }}
        name={item.icon}
        size={200}
        color="white"
      />
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </LinearGradient>
  );
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    // this.setState({ showRealApp: true });
    AsyncStorage.setItem("first_item", "true").then(() => {
      this.setState({ showRealApp: true });
    });
  }
  _onSkip = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    // this.setState({ showRealApp: true });
    AsyncStorage.setItem("first_item", "true").then(() => {
      this.setState({ showRealApp: true });
    });
  }
  render() {
    if (this.state.showRealApp)
    {
      return <RealApp />;
    }
    else
    {
      return (
        <AppIntroSlider
          slides={slides}
          renderItem={this._renderItem}
          showPrevButton
          showSkipButton
          onDone={this._onDone}
          onSkip={this._onSkip}
        />
      );
    }
  }
}
