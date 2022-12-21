import { useState } from 'react';
import { TouchableOpacity, ScrollView, Text, View } from 'react-native';
import { styles } from './styles';
import { quizes } from '../../staticData/quizes';
import { useNavigation } from '@react-navigation/native';

export const Quiz = () => {
  const [question, setQuestion] = useState(0);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const navigation = useNavigation();
  
  const handleNextQuestion = () => {
    setQuestion(prevState => prevState + 1);
    setIsCorrectAnswer(false)
  }

  const handlePreviousQuestion = () => {
    setQuestion(prevState => prevState - 1);
  }

  const alternativeIsCorrect = ({isCorrect}) => {
    setIsCorrectAnswer(isCorrect)



  }

  return (
    <View style={styles.container}>

      <View style={styles.question}>
        <Text style={styles.questionText}>
          {quizes[question].question}
        </Text>
      </View>
      
      <View>
        <Text style={styles.explainText}>Selecione uma das opções abaixo:</Text>
      </View>

      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {
            quizes[question].alternatives.map(alternative =>
              <TouchableOpacity
                key={alternative.alternative}
                style={isCorrectAnswer && alternative.isCorrect ? styles.correctAlternative : styles.alternative}
                onPress={() => alternativeIsCorrect(alternative)}
              >
                <Text style={styles.alternativeText}>
                  {alternative.alternative}
                </Text>
              </TouchableOpacity>
            )
          }
        </ScrollView>
      </View>

      <View style={styles.sectionButton}>
      
        <TouchableOpacity style={styles.button} onPress={handlePreviousQuestion}>
          <Text style={styles.textButton}>Voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonCorrect} onPress={() => navigation.navigate('quizResult')}>
          <Text style={styles.textButton}>Corrigir</Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.button} onPress={handleNextQuestion}>
          <Text style={styles.textButton}>Avançar</Text>
        </TouchableOpacity>
      
      </View>

    </View>
  );
}
