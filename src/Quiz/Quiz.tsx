import { useState } from 'react';
import { TouchableOpacity, ScrollView, Text, View } from 'react-native';
import { styles } from './styles';
import { quizes } from '../staticData/quizes';

export const Quiz = () => {
  const [question, setQuestion] = useState(0)
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false)
  
  const handleNextQuestion = () => {
    setQuestion(prevState => prevState + 1);
    setIsCorrectAnswer(false)
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
        <ScrollView showsVerticalScrollIndicator={false}>
          {
            quizes[question].alternatives.map(alternative =>
              <TouchableOpacity
                key={alternative.alternative}
                style={isCorrectAnswer && alternative.isCorrect ? styles.correctAlternative : styles.alternative }
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
        <TouchableOpacity style={styles.button} onPress={handleNextQuestion}>
          <Text style={styles.textButton}>Avançar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
