import React from 'react';
import { useEffect } from 'react';
import { View, Text } from 'react-native';
import RNBootSplash from "react-native-bootsplash";

export function App() {
  useEffect(() => {
    RNBootSplash.hide({ fade: true, duration: 500 }).then(() => {
      console.log('bootsplash hidden');
    })

    });
  return (
    <View>
      <Text style={{
        position: 'absolute',
        top: 200,
        left: 100
      }}>Congrats you fixed the build</Text>
    </View>
  );
}
