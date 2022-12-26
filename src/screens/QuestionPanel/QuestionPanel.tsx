import { useState } from 'react';
import { TouchableOpacity, ScrollView, Text, View, FlatList } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export const QuestionPanel = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>Selecione uma aula abaixo</Text>

      <View style={styles.quizes}>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('quiz')}>
          <Text style={styles.textButton}>Aula 1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Aula 2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} disabled>
          <Text style={styles.textButton}>Aula 3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} disabled>
          <Text style={styles.textButton}>Aula 4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} disabled>
          <Text style={styles.textButton}>Aula 5</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} disabled>
          <Text style={styles.textButton}>Aula 6</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} disabled>
          <Text style={styles.textButton}>Aula 7</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} disabled>
          <Text style={styles.textButton}>Aula 8</Text>
        </TouchableOpacity>
      
      </View>
      
    </View>
  );
}
