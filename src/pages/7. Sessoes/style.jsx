import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({
  nav: {
    width: '100%',
    height: '7%',
    backgroundColor: '#424141',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 60,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  iconav: {
    width: '10%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  all: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000'
  },
  header: {
    width: '100%',
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    width: '100%',
    height: '88%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inform: {
    width: '95%',
    height: '12%',
    borderRadius: 5,
    backgroundColor: '#1A1A1A',
  },
  informup: {
    width: '100%',
    height: '30%',
    padding: 10
  },
  informdown: {
    width: '100%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  time: {
    width: '40%',
    height: '70%',
    backgroundColor: '#424141',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5
  },
  audio: {
    width: '40%',
    height: '70%',
    backgroundColor: '#424141',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5
  },
  esquerda: {
    width: '80%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    flexDirection: 'row',
  },
  direita: {
    width: '20%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});