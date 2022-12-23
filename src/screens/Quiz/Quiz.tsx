import { useEffect, useState } from 'react';
import { TouchableOpacity, Alert, Text, View, ScrollView } from 'react-native';
import { styles } from './styles';
import { quizes } from '../../staticData/quizes';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Quiz = () => {
  const [question, setQuestion] = useState(0);
  const [isFirstQuestion, setIsFirstQuestion] = useState(true);
  const [isLastQuestion, setIsLastQuestion] = useState(true);
  const [pressedAlternative, setPressedAlternative] = useState(false);
  const [namePressedAlternative, setNamePressedAlternative] = useState('');
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [correctAlternative, setCorrectAlternative] = useState(false);
  const [activeDisabled, setActiveDisabled] = useState(false);
  
  const navigation = useNavigation();
  
  const totalQuestions = quizes.length
  const atualQuestion = question

  useEffect(function handleFirstQuestion() {
    atualQuestion === 0 ? setIsFirstQuestion(true) : setIsFirstQuestion(false)
  }, [question]);

  useEffect(function handleLastQuestion() {
    atualQuestion === totalQuestions - 1 ? setIsLastQuestion(true) : setIsLastQuestion(false)
  }, [question]);

  const thereIsButtonPressed = () => pressedAlternative === true ? true : Alert.alert("", "Você precisa selecionar uma alternativa")
  
  const handleNextQuestion = () => {
    if(thereIsButtonPressed() && correctAlternative) {
      setQuestion(prevState => prevState + 1);
      setIsCorrectAnswer(false)
      setCorrectAlternative(false)
      setActiveDisabled(false)
    } else {
      Alert.alert("", "Você precisa pressionar o botão corrigir antes de prosseguir")
    }
  };

  const handlePreviousQuestion = () => {
    setQuestion(prevState => prevState - 1);
  };

  const handlePressedAlternative = (alternative: any) => {
    setIsCorrectAnswer(alternative.isCorrect)
    setPressedAlternative(true)
    setNamePressedAlternative(alternative.alternative)
  }

  const handleCorrect = () => {
    thereIsButtonPressed()
    setCorrectAlternative(true)
    setActiveDisabled(true) // Desabilita a possibilidade de pressionar os botões, após a correção.

    // async () => {
    //   try {
    //     const jsonStringfy = JSON.stringify(isCorrectAnswer)
    //     await AsyncStorage.setItem('answer_question_1', jsonStringfy)
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    
  }

  return (
    <View style={styles.container}>

      <View style={styles.question}>
        <Text style={styles.questionText}>
          {quizes[question]?.question}
        </Text>
      </View>

      <View>
        <Text style={styles.explainText}>Selecione uma das opções abaixo:</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {
          quizes[question].alternatives.map(alternative =>
            <TouchableOpacity
              key={alternative.alternative}
              style={(namePressedAlternative === alternative.alternative && isCorrectAnswer && correctAlternative) ? styles.correctAlternative :
                (namePressedAlternative === alternative.alternative && isCorrectAnswer === false && correctAlternative) ? styles.incorrectAlternative :
                namePressedAlternative === alternative.alternative ? styles.pressedAlternative : styles.alternative}
              onPress={() => handlePressedAlternative(alternative)}
              disabled={activeDisabled}
            >
              <Text style={styles.alternativeText}>
                {alternative.alternative}
              </Text>
            </TouchableOpacity>
          )
        }
      </ScrollView>

      <View style={styles.sectionButton}> 
      
        <TouchableOpacity style={styles.button} onPress={isFirstQuestion ? () => navigation.navigate('questionPainel') : handlePreviousQuestion}>
          <Text style={styles.textButton}>Voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonCorrect} onPress={handleCorrect}>
          <Text style={styles.textButton}>Corrigir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={isLastQuestion ? () => navigation.navigate('quizResult') : handleNextQuestion}>
          <Text style={styles.textButton}>{isLastQuestion ? 'Finalizar' : 'Avançar'}</Text>
        </TouchableOpacity>
      
      </View>

    </View>
  );
}
