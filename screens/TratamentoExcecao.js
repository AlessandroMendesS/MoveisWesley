import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native"; 
import Toast from "react-native-toast-message";

export default function TratamentoExcecoes() {
  const [valor, setValor] = useState('');

  const divisao = () => {
    try {
      const numero = parseFloat(valor);

      // Verificar se é um número válido
      if (isNaN(numero)) {
        throw new Error("Insira um número válido!");
      }
      
      // Verificar se o número é maior que 0
      if (numero <= 0) {
        throw new Error("Insira um número maior que 0!");
      }
      
      // Realizar a divisão
      const resultado = 100 / numero;

      // Exibir o resultado no toast
      Toast.show({
        type: "success",  
        text1: 'Resultado',
        text2: `100 % por ${numero} é ${resultado}`,
      });

      // Limpar o valor do input após a operação
      setValor('');
    } catch (erro) {
      // Exibir erro no toast
      Toast.show({
        type: "error",
        text1: "Erro",
        text2: erro.message,
      });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder="Digite um número"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />
      <Button title="Dividir" onPress={divisao} />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',  
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    width: '80%',
  }
});
