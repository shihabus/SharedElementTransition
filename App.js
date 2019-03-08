import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { createAppContainer } from 'react-navigation';
import { Transition, FluidNavigator } from 'react-navigation-fluid-transitions';
import styles from './Styles'

const data={
  items: [
    { 
      url: require('./assets/air-jordan-1.png'), 
      name: `Air Jordan`, price: `1500`,
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' 
    },
    { 
      url: require('./assets/apple.png'), 
      name: 'iPhone Red', 
      price: `1100`,
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' 
    },
    { 
      url: require('./assets/shoe.jpg'), 
      name: 'Nike Jogger', 
      price: `2300`,
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' 
    },
    { 
      url: require('./assets/boss.jpg'), 
      name: 'Boss Men', 
      price: `2300`,
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' 
    },
    { 
      url: require('./assets/beats.jpg'), 
      name: 'Beats', 
      price: `2300`,
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' 
    },
    { 
      url: require('./assets/air-jordan-1.png'), 
      name: `Air Jordan`, 
      price: `1500`,
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' 
    },
    { 
      url: require('./assets/apple.png'), 
      name: 'iPhone Red', 
      price: `1100`,
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' 
    },
    { 
      url: require('./assets/shoe.jpg'), 
      name: 'Nike Jogger', 
      price: `2300`,
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' 
    },
    { 
      url: require('./assets/boss.jpg'), 
      name: 'Boss Men', 
      price: `2300`,
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' 
    },
    { 
      url: require('./assets/beats.jpg'), 
      name: 'Beats', 
      price: `2300`,
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' 
    },
  ],
};


class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = data
  }

  render() {
    const gradient = ['#231630', '#55224b']
    return (
      <LinearGradient colors={gradient} style={styles.container}>
        <SafeAreaView>
          <FlatList
            data={this.state.items}
            renderItem={this.renderItem}
            keyExtractor={(_, index) => `${index}`}
          />
        </SafeAreaView>
      </LinearGradient>
    );
  }

  renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.row}
      onPress={() => { this.props.navigation.navigate('details', { item, index }); }}>
      <Transition shared={`product${index}`}>
        <Image style={styles.image} source={item.url} />
      </Transition>

      <Transition>
        <View style={styles.textContainer}>
          <Text style={styles.header}>{item.name}</Text>
          <Text style={styles.subheader}>{'\u20B9'} {item.price}</Text>
        </View>
      </Transition>
    </TouchableOpacity>

  )
}

class DetailsScreen extends React.Component {
  render() {
    const gradient = ['#231630', '#55224b']
    const { item, index } = this.props.navigation.state.params
    return (
      <LinearGradient colors={gradient} style={[styles.container]}>
        <SafeAreaView style={{flex:1}}>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.goBack()}>
            <Text style={{ textAlign: 'left', color: '#fff', fontSize: 18 }}>{'\u2190'} Back</Text>
          </TouchableOpacity>
          <Transition shared={`product${index}`}>
            <Image
              style={styles.largeImage}
              source={item.url}
            />
          </Transition>
          <Transition appear='horizontal' delay>
            <View style={styles.bottomContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.header}>{item.name}</Text>
                <Text style={[styles.subheader,{fontSize:20}]}>{'\u20B9'} {item.price}</Text>
                <Text style={styles.subheader}>{item.description}</Text>
              </View>

            </View>
          </Transition>
        </SafeAreaView>
      </LinearGradient>
    );
  }
}

const AppNavigator = FluidNavigator(
  {
    list: { screen: Products },
    details: { screen: DetailsScreen },
  },
  {
    navigationOptions: {
      gesturesEnabled: true,
    },
  }
);


const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

