import { Image } from 'expo-image';
import { View, Platform, StyleSheet, Text } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    // <View>
      <View style={styles.squarePink}>
        <Text style={styles.colorPurple} >Hello World!!</Text>
      </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  colorPurple: {
    color:"rebeccapurple",
    fontSize: 50
  },
  squarePink : {
    // height: 100,
    // width: 300,
    flex: 1,
    backgroundColor: "pink",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // borderRadius: 40
  }
})