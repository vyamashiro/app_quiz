import { useState } from 'react';
import { TouchableOpacity, ScrollView, Text, View } from 'react-native';
import { styles } from './styles';

export const QuizResult = () => {

  const quizResult = [true, false, true, true, true];
  const totalQuestions = quizResult.length;
  const totalCorrectQuestions = quizResult.filter((item) => item === true).length;

  return (
    <View style={styles.container}>
      
      <Text style={styles.resultText}>Você acertou {totalCorrectQuestions} de {totalQuestions} questões!</Text>

      <View style={styles.sectionButton}>
      
        <TouchableOpacity style={styles.button} onPress={() => console.log('voltar')}>
          <Text style={styles.textButton}>Voltar</Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.button} onPress={() => console.log('ativar rota para o painel de questões')}>
          <Text style={styles.textButton}>Finalizar</Text>
        </TouchableOpacity>
      
      </View>
      
    </View>
  );
}
