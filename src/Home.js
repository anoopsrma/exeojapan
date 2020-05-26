import React from "react";
import { WebView } from 'react-native-webview';
import { View, Text, StyleSheet, Button } from "react-native";

const ScreenContainer = ({ children }) => (
  <View>{children}</View>
);

export const Home = ({ navigation }) => (
    <WebView
        source={{ uri: 'http://www.exeo-japan.co.jp/s/app/useful/manners/female/' }}
      />
);
