import { useState } from 'react';
import { TouchableOpacity, ScrollView, Text, View } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const QuizResult = () => {
  const navigation = useNavigation();
  const [totalQuestions, setTotalQuestions] = useState<any>();
  const [totalCorrectQuestions, setTotalCorrectQuestions] = useState<any>();
  
  const getData = async () => {    
    const data: any = await AsyncStorage.getItem('@answer_question')
    const quizResult = JSON.parse(data)
    setTotalQuestions(quizResult.length);
    setTotalCorrectQuestions(quizResult.filter((item: any) => item === true).length)
  };
  
  getData()

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
