import { TouchableOpacity, ScrollView, StyleSheet, Text, View } from 'react-native';

export const Quiz = () => {
  const question = [
    {
      // "Question": "Qual a diferença entre a tag &lt;span&gt; e a tag &lt;div&gt; ?"
      "Question": "Qual a diferença entre a tag <span> e a tag <div> ?",
      "Alternatives": ['Resposta A', 'Resposta B', 'Resposta C', 'Resposta D', 'Resposta E']
    },
    {
      "Question": "Qual a diferença entre a tag <span> e a tag <div> ?",
      "Alternatives": ['Resposta A', 'Resposta B', 'Resposta C', 'Resposta D', 'Resposta E']
    },
  ]
  
  const handleNextQuestion = () => {

  }

  return (
    <View style={styles.container}>

      <View style={styles.question}>
        {/* <Text style={styles.questionText}>Pergunta 1 - Qual a diferença entre a tag &lt;span&gt; e a tag &lt;div&gt; ?</Text> */}
        <Text style={styles.questionText}>Pergunta 1 - Sobre a componentização no React, escolha a alternativa incorreta:</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.alternative}>
          <Text style={styles.alternativeText}>Componentizar é uma forma de reaproveitar trechos de código em vários locais do seu código.</Text>
        </View>
        
        <View style={styles.alternative}>
          <Text style={styles.alternativeText}>Componentização também ao simplificar um componente muito complexo em múltiplos componentes menores, facilitando assim na manutenção do código.</Text>
        </View>
        
        <View style={styles.alternative}>
          <Text style={styles.alternativeText}>Apesar de ajudar no reaproveitamento e simplificação do código, componentizar reduz a produtividade e legibilidade do projeto.</Text>
        </View>
        
        <View style={styles.alternative}>
          <Text style={styles.alternativeText}>Apesar de ajudar no reaproveitamento e simplificação do código, componentizar reduz a produtividade e legibilidade do projeto.</Text>
        </View>
        
        <View style={styles.alternative}>
          <Text style={styles.alternativeText}>Apesar de ajudar no reaproveitamento e simplificação do código, componentizar reduz a produtividade e legibilidade do projeto.</Text>
        </View>

      </ScrollView>

      <View>
        <TouchableOpacity style={styles.button} onPress={handleNextQuestion}>
          <Text style={styles.textButton}>Avançar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    // paddingTop: 40,
    // paddingBottom: 40
  },
  question: {
    marginTop: 10,
    marginBottom: 10,
  },
  alternative: {
    flex: 1,
    // height: '',
    width: 350,
    borderColor: '#ffffffb7',
    borderWidth: 3,
    borderRadius: 5,
    padding: 20,
    marginTop: 5,
    marginBottom: 5,
  },
  questionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: "bold",
    // fontFamily: "Aria"
  },
  alternativeText: {
    color: '#fff',
    fontSize: 14,
    // fontFamily: "Aria"
  },
  button: {
    width: 100,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton: {
    color: '#fff',
    fontSize: 14,
    fontWeight: "bold",
  }
});
