import { StyleSheet,Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
    },
    row: {
      margin: 10,
      padding: 10,
      backgroundColor: 'rgba(252, 242, 242,0.5)',
      borderColor: '#CCC',
      borderWidth: StyleSheet.hairlineWidth,
      shadowColor: '#EEE',
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.4,
      flexDirection: 'row',
      justifyContent: 'space-around',
      elevation: 3,
      borderRadius: 10
    },
    textContainer: {
      flexDirection: 'column',
      marginLeft: 18,
      flex: 1,
      justifyContent: 'center',
    },
    header: {
      color: '#000',
      fontSize: 34,
      marginBottom: -14,
      fontFamily: 'Bebas Neue',
    },
    subheader: {
      color: '#000',
      fontSize: 28,
      paddingTop: 10,
      fontFamily: 'Bebas Neue',
      textAlign:'justify'
    },
    image: {
      width: 80,
      height: 80,
      borderRadius: 10,
      resizeMode: 'cover',
      backgroundColor: '#fff'
    },
    caption: {
      fontWeight: 'bold',
      fontSize: 14,
    },
    largeImage: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').width,
      backgroundColor: '#fff',
    },
    bottomContainer: {
      backgroundColor: 'rgba(252, 242, 242,0.5)',
      flex: 1,
      padding: 20,
      margin: 10,
      borderRadius: 10
    },
    button: {
      padding: 12,
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
  });