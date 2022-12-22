import { useState } from 'react';
import { TouchableOpacity, ScrollView, Text, View } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export const QuizResult = () => {
  const quizResult = [true, false, true, true, true];
  const totalQuestions = quizResult.length;
  const totalCorrectQuestions = quizResult.filter((item) => item === true).length;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      
      <Text style={styles.resultText}>Você acertou {totalCorrectQuestions} de {totalQuestions} questões!</Text>

      <View style={styles.sectionButton}>
      
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('quiz')}>
          <Text style={styles.textButton}>Voltar</Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('questionPainel')}>
          <Text style={styles.textButton}>Finalizar</Text>
        </TouchableOpacity>
      
      </View>
      
    </View>
  );
}
