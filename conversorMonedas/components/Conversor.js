import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import convertCurrency from '../utils/conversorDivisa';

const Converter = () => {
  const [amount, setAmount] = useState('');
  const [converted, setConverted] = useState('');
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('EUR');

  const handleConvert = () => {
    const result = convertCurrency(parseFloat(amount), from, to);
    setConverted(result.toFixed(2));
    setAmount('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Monedas</Text>
      <Text>De (USD/EUR):</Text>
      <TextInput value={from} onChangeText={setFrom} testID="fromInput" style={styles.input} />
      <Text>A (USD/EUR):</Text>
      <TextInput value={to} onChangeText={setTo} testID="toInput" style={styles.input} />
      <Text>Cantidad:</Text>
      <TextInput
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        testID="amountInput"
        style={styles.input}
      />
      <Button title="Convertir" onPress={handleConvert} testID="convertButton" />
      <Text testID="resultText">Resultado: {converted}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, marginBlock: 100 },
  input: {
    borderWidth: 1,
    marginVertical: 5,
    padding: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Converter;
