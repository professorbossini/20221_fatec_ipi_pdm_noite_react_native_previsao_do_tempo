import { useState } from 'react'
import { 
  Button,
  FlatList,
  StyleSheet, 
  Text,
  TextInput, 
  View 
} from 'react-native';

import{
  PROTOCOL,
  BASE_URL,
  UNITS,
  CNT,
  LANGUAGE,
  APPID
} from '@env'

import PrevisaoItem from './components/PrevisaoItem';

export default function App() {
  const [cidade, setCidade] = useState('')
  const [previsoes, setPrevisoes] = useState([])
  const capturarCidade = (cidadeDigitada) => {
    setCidade(cidadeDigitada)
  }

  const obterPrevisoes = () => {
    const url = encodeURI(`${PROTOCOL}://${BASE_URL}?units=${UNITS}&cnt=${CNT}&lang=${LANGUAGE}&appid=${APPID}&q=${cidade}`)
    console.log(url)
    fetch(url)
    .then (response => response.json())
    .then(dados => setPrevisoes(dados['list']))
  }
  return (
    <View style={styles.container}>

      <View
        style={styles.cidadeView}>
        {/* View para a entrada de dados */}
        <TextInput 
          style={styles.cidadeTextInput}
          placeholder="Digite o nome da cidade"
          value={cidade}
          onChangeText={capturarCidade}      
        />
        <Button 
          title="OK"
          onPress={obterPrevisoes}
        />

      </View>
      {/* exibição das previsões */}
      <View
        style={{alignItems: 'center'}}>
        <FlatList 
          data={previsoes}
          renderItem={
            p => (
              <PrevisaoItem previsao={p.item}/>
            )
          }
        />
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40
  },
  cidadeView: {
    padding: 12,
    marginBottom: 8
  },
  cidadeTextInput: {
    padding: 12,
    borderBottomColor: '#FF9800',
    borderBottomWidth: 2,
    marginBottom: 4,
    textAlign: 'center'
  }
});
