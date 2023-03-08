import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({ text, handlePress  }) => {
  return (
      <TouchableOpacity onPress={handlePress} style={styles.button}>
          <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        backgroundColor: 'black',
        bottom: 30,
        width: '90%',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 100
    },
    buttonText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16
    }
})