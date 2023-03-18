import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Configuration, OpenAIApi } from 'openai'
import { OPENAI_API_KEY } from '../../Utils/api';
import { styles } from './styles';


export default function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleInputChange = (text) => {
    setInput(text);
  };
  const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,

  });
  const openai = new OpenAIApi(configuration);
  const handleGenerate = async () => {
    try {
      const prompt = input;
      const completions = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 200,
        temperature: 0.2,
      });    
      const response = completions.data.choices[0].text.trim();
      console.log(response);
      setOutput(response);
      setInput("")
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>OpenAI GPT-3 Chatbot</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleInputChange}
        value={input}
        placeholder="Type here..."
      />
      <Button title="Generate" onPress={handleGenerate} />
      <Text style={styles.output}>{output}</Text>
    </View>
  );
}

