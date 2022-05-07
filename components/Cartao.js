import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Cartao = (props) => {
  return (
    <View
        style={{...styles.cartao, ...props.meusEstilos}}>
      {props.children}
    </View>
  )
}



export default Cartao

const styles = StyleSheet.create({
    cartao: {
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 4,
        padding: 12,
        borderRadius: 8
    }
})