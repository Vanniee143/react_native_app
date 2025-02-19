import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const Button = ({ onPress, title, variant }) => (
  <TouchableOpacity 
    onPress={onPress} 
    style={[styles.button, variant === "destructive" && styles.destructiveButton]}
  >
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const Input = ({ value, onChangeText, placeholder }) => (
  <TextInput
    style={styles.input}
    value={value}
    onChangeText={onChangeText}
    placeholder={placeholder}
    keyboardType="numeric"
  />
);

const Home = () => {
  const [count, setCount] = useState(0);
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  const calculate = (operator) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)) {
      setResult("Invalid input");
      return;
    }
    switch (operator) {
      case "+": setResult(n1 + n2); break;
      case "-": setResult(n1 - n2); break;
      case "*": setResult(n1 * n2); break;
      case "/": setResult(n2 !== 0 ? n1 / n2 : "Cannot divide by zero"); break;
      default: setResult(null);
    }
  };

  return (
    <View style={styles.container}>
      {/* Tap Counter */}
      <View style={styles.card}>
        <Text style={styles.title}>Tap Counter</Text>
        <Text style={styles.counter}>{count}</Text>
        <View style={styles.buttonGroup}>
          <Button onPress={increment} title="Increment" />
          <Button onPress={decrement} title="Decrement" />
          <Button onPress={reset} title="Reset" variant="destructive" />
        </View>
      </View>

      {/* Calculator */}
      <View style={styles.card}>
        <Text style={styles.title}>Calculator</Text>
        <Input value={num1} onChangeText={setNum1} placeholder="Enter first number" />
        <Input value={num2} onChangeText={setNum2} placeholder="Enter second number" />
        <View style={styles.buttonGroup}>
          <Button onPress={() => calculate("+")} title="+" />
          <Button onPress={() => calculate("-")} title="-" />
          <Button onPress={() => calculate("*")} title="*" />
          <Button onPress={() => calculate("/")} title="/" />
        </View>
        <Text style={styles.result}>Result: {result !== null ? result : "-"}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignItems: 'center',
    marginBottom: 20,
    width: 300,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  counter: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  destructiveButton: {
    backgroundColor: '#dc3545',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  result: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default Home;
