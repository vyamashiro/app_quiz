import { useState } from 'react';
import { TouchableOpacity, Text, View, TextInput } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export const Login = () => {
  const [value, setValue] = useState('')
  const [passwordIsCorrect, setPasswordIsCorrect] = useState(true)
  const navigation = useNavigation();

  const validatePassword = (password) => {
    setValue(password)
    setPasswordIsCorrect(true)
    return password === '#mch123' ? setPasswordIsCorrect(false) : setPasswordIsCorrect(true)
  }

  const handleNextStep = () => navigation.navigate('questionPainel')

  return (
    <View style={styles.container}>
      
      <View>

        <TextInput 
          style={styles.input}
          placeholder="Código da aula"
          placeholderTextColor="#6B6B6B"
          onChangeText={password => validatePassword(password)}
          value={value}
        />

        <TouchableOpacity style={styles.button} disabled={passwordIsCorrect} onPress={handleNextStep}>
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>

      </View>
 
    </View>
  );
}
