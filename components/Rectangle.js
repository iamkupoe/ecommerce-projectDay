import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Rectangle() {
    return (
        <View style={styles.rectangle}></View>
    )
}

const styles = StyleSheet.create({
    rectangle:{
        backgroundColor:"#6f69b5",
        height:5,
        width:45,
        borderRadius:5,
      },
})