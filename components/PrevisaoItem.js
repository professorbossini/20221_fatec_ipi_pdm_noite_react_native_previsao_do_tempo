import { 
    Image, 
    StyleSheet, 
    Text, 
    View 
} from 'react-native'
import React from 'react'
import Cartao from './Cartao'

const PrevisaoItem = ({previsao}) => {
    // const dt = props.previsao.dt
    const dt = previsao.dt
    const description = previsao.weather[0].description
    const icon = previsao.weather[0].icon
    const temp_min = previsao.main.temp_min
    const temp_max = previsao.main.temp_max
    const humidity = previsao.main.humidity
    //const previsao = props.previsao.item
    // const previsao = props.previsao
    // const outroProp = props.outroProp
    return (
        <Cartao
            meusEstilos={styles.cartao}>
            <View style={styles.tela}>
                <Image 
                    style={styles.imagem}
                    source={{
                        uri: 'https://openweathermap.org/img/wn/' + icon + '.png'
                    }}
                />
                <View>
                    <View style={styles.primeiraLinha}>
                        <Text>{new Date(dt * 1000).toLocaleTimeString()} - {description}</Text>
                    </View>
                    <View style={styles.segundaLinha}>
                        <Text style={styles.valor}>Min: {temp_min + '\u00B0C'}</Text>
                        <Text style={styles.valor}>Max: {temp_max + '\u00B0C'}</Text>
                        <Text style={styles.valor}>Hum: {humidity + '%'}</Text>
                    </View>
                </View>
                
            </View>
        </Cartao>
  )
}


export default PrevisaoItem

const styles = StyleSheet.create({
    cartao: {
        marginBottom: 4
    },
    tela: {
        flexDirection: 'row'
    },
    imagem: {
        width: 50,
        height: 50
    },
    primeiraLinha: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    segundaLinha: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 4,
        borderTopWidth: 1,
        borderTopColor: '#DDD'
    },
    valor: {
        marginHorizontal: 2
    }
})