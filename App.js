import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Cotacao from './components/cotacaodolar';
import Api from './components/Api';

export default function App() {
	const [cotacao, setCotacao] = useState(0);
	const [inputCotacao, setInputCotacao] = useState(0);
	
	async function carregaCotacao(){
		const response = await Api.get('json/last/USD-BRL');
		setCotacao(response.data.USDBRL);
	}
  return (
    <View style={styles.container}>
		  <View style={styles.bloco}> 
			  <Text style={styles.texto}>Cotação de Moedas</Text>
			  <TextInput 
				  style={styles.input}
				  onChangeText={(data)=>setInputCotacao(data)}
				  />
			  
			  <TouchableOpacity 
				  style={styles.botao}
				  onPress={carregaCotacao}
				  >
			     <Text style={styles.textoBotao}>Dolar para Real</Text>
		      </TouchableOpacity>
			  
		  </View>
		  
        <Cotacao data={cotacao}/>
		  
	</View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
	centerAlign: '50'
  },
	
	bloco:{
		width: '100%'
	},
	
	texto:{
	   fontSize: 30,
	   textAlign: 'center',
	   fontWeight: 'bold'
},
	
	botao:{
		width: '80%',
		marginLeft: '10%',
		borderWidth: '50',
		backgroundColor: 'black'
	},
	
	textoBotao:{
		fontSize: 20,
	    color: '#fff',	
	    textAlign: 'center'
	}
});
