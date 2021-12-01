import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,Image, View,SafeAreaView,TouchableNativeFeedback, Button, Alert, ToastAndroid } from 'react-native';

export default function App() {



  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor:'#fff',
        flex:1,
        flexDirection:"row",
        justifyContent:"center"
      }}>
      <View 
        style={{
          backgroundColor:"blue",
          width:100,
          height:100
        }}
      />
        <View 
        style={{
          backgroundColor:"red",
          width:100,
          height:100
        }}
        
      />

    <View 
        style={{
          backgroundColor:"green",
          width:100,
          height:100
        }}
        
      />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:40,
    backgroundColor: '#fff',
  },
});
