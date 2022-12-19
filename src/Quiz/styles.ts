import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    marginTop: 20,
    marginBottom: 40,
  },
  alternative: {
    flex: 1,
    width: 350,
    borderColor: '#ffffffb7',
    borderWidth: 3,
    borderRadius: 5,
    padding: 20,
    marginTop: 5,
    marginBottom: 5,
  },
  correctAlternative: {
    backgroundColor: '#31CF67',
    flex: 1,
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
  sectionButton: {
    marginTop: 20,
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
