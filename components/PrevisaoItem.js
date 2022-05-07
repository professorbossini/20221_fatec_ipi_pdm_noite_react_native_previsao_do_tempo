import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Cartao from './Cartao'

const PrevisaoItem = () => {
  return (
    <Cartao
        estilos={styles.cartao}>
        
    </Cartao>
  )
}

export default PrevisaoItem

const styles = StyleSheet.create({
    cartao: {
        marginBottom: 4
    }
})