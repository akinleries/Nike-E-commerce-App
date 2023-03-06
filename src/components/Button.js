import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const Button = ({ text  }) => {
  return (
      <Pressable style={styles.button}>
          <Text style={styles.buttonText}>{text}</Text>
      </Pressable>
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