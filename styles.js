import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    width: '80%',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    height: 40
  },
  button: {
    margin: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5 
  },
  buttonContainer: {
    bottom: -60,
    flexDirection: 'column',
    width: '85%'
  },
  buttonText: {
    color: 'white',
    fontWeight: '800',
    textAlign: 'center'
  },
  label: {
    textAlign: 'left',
    width: "80%",
    marginTop: 10,
    fontSize: 20
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: "50%",
    borderWidth: 0.1,
    margin: 30
  },
  header: {
    backgroundColor: '#1670f7',
  },
  headerTitle: {
    color: '#fff'
  }
});