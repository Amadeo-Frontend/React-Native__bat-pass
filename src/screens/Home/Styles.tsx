import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
  logoContainer: {
    flexDirection: 'column',
    borderColor: '#f2ff2f2',
    borderWidth: 2,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 60,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#4d4d4d',
  },
  inputContainer: {
    width: '80%',
    alignItems: 'center',
    flexDirection: 'column',
  },
  buttonContainer: {
    width: '80%',
    alignItems: 'center',
    flexDirection: 'column',
    shadowRadius: 1,
    marginTop: 16,
    marginBottom: 16,
  },
});

export default styles;
