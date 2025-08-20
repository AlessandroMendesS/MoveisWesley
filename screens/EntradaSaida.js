import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function EntradaSaida() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const processarDados = () => {
    setOutput(input.toUpperCase());
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite algo"
        value={input}
        onChangeText={setInput}
      />
      <Button title="Processar" onPress={processarDados} />
      <Text>Saída: {output}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, width: '80%' },
});