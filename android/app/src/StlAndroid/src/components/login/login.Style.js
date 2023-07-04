import {StyleSheet} from 'react-native';

export const LoginStyle = StyleSheet.create({
  loginContainer: {
    backgroundColor: '#E6E6E6',
    paddingHorizontal: 50,
    paddingVertical: 30,
    flex: 1,
    alignItems: 'center',
  },
  content: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  comLogo: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor:'white',
    alignSelf: 'center',
  },
  signinText: {
    fontSize: 25,
    color: '#000',
    fontWeight: 600,
  },
  accountText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 500,
    alignSelf: 'center',
  },
  form: {
    alignItems: 'flex-start',
    marginTop: 15,
  },
  inputlabel: {
    fontSize: 16,
    color: '#000',
  },
  signinInput: {
    width: '100%',
    fontSize: 15,
    height: 40,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 4,
    color: '#000',
  },
  loginBtns: {
    width: '100%',
    top: 10,
  },
  signinBtnOpacity: {
    backgroundColor: '#0D99FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    width: '100%',
    height: 40,
  },
  btnText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
