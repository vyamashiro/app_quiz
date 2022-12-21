import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    alignItems: 'center',
    padding: 40,
    justifyContent: 'center',
  },
  quizes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 150,
    height: 100,
    borderRadius: 5,
    backgroundColor: 'rgb(30, 167, 253)',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  textButton: {
    color: '#fff',
    fontSize: 14,
    fontWeight: "bold",
  }
});
