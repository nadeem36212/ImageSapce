// app/ScarletScreen.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class GreyScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      ImageUri:'../Images/images2.jpg'
    }
  }
  render(){
    return (
      <View style={styles.container}>
        {
          (() => {
        switch (this.props.screenProps) {
          case "HomeScreen":   return (
            <View style={{ margin:12,flex:5 }}>
              <View style={{ flexDirection:'row',flex:3.8,alignItems:'center',justifyContent:'center', }}>
                <View style={{ flex:1.9,alignItems:'center',justifyContent:'center',margin:5 }}>
                  <Image source={require('../Images/images2.jpg')} style={{width:110, height:110,resizeMode:'contain'}}/>
                </View>
                <View style={{ flex:1.9,alignItems:'center',justifyContent:'center',margin:5 }}>
                  <Image source={require('../Images/images5.jpg')} style={{width:110, height:110,resizeMode:'contain'}}/>
                </View>
              </View>
              <View style={{ flex:1.2,flexDirection:'row',alignItems:'center',justifyContent:'center', }}>
                <View style={{ flex:0.6,margin:5,borderRadius:30,backgroundColor:'black',alignItems:'center',justifyContent:'center', }}>
                  <TouchableOpacity style={{ width:200,height:30,alignItems:'center',justifyContent:'center' }}>
                    <Text style={{ color:'white',textAlign:'center',fontSize:15 }}>Add to Cart</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ flex:0.6,margin:5,alignItems:'center',justifyContent:'center',borderRadius:30,backgroundColor:'black' }}>
                  <TouchableOpacity style={{ width:200,height:30,alignItems:'center',justifyContent:'center' }}>
                    <Text style={{ color:'white',textAlign:'center',fontSize:15 }}>Add to Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
          case "TopCategoryTab": return (
            <View style={{ margin:12,flex:5 }}>
              <View style={{ flexDirection:'row',flex:3.8,alignItems:'center',justifyContent:'center', }}>
                <View style={{ flex:1.9,alignItems:'center',justifyContent:'center',margin:5 }}>
                  <Image source={require('../Images/images3.jpg')} style={{width:110, height:110,resizeMode:'contain'}}/>
                </View>
                <View style={{ flex:1.9,alignItems:'center',justifyContent:'center',margin:5 }}>
                  <Image source={require('../Images/images6.jpg')} style={{width:110, height:110,resizeMode:'contain'}}/>
                </View>
              </View>
              <View style={{ flex:1.2,flexDirection:'row',alignItems:'center',justifyContent:'center', }}>
                <View style={{ flex:0.6,margin:5,borderRadius:30,backgroundColor:'black',alignItems:'center',justifyContent:'center', }}>
                  <TouchableOpacity style={{ width:200,height:30,alignItems:'center',justifyContent:'center' }}>
                    <Text style={{ color:'white',textAlign:'center',fontSize:15 }}>Add to Cart</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ flex:0.6,margin:5,alignItems:'center',justifyContent:'center',borderRadius:30,backgroundColor:'black' }}>
                  <TouchableOpacity style={{ width:200,height:30,alignItems:'center',justifyContent:'center' }}>
                    <Text style={{ color:'white',textAlign:'center',fontSize:15 }}>Add to Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
          default: return (
            <View style={{ margin:12,flex:5 }}>
              <View style={{ flexDirection:'row',flex:3.8,alignItems:'center',justifyContent:'center', }}>
                <View style={{ flex:1.9,alignItems:'center',justifyContent:'center',margin:5 }}>
                  <Image source={require('../Images/images.jpg')} style={{width:110, height:110,resizeMode:'contain'}}/>
                </View>
                <View style={{ flex:1.9,alignItems:'center',justifyContent:'center',margin:5 }}>
                  <Image source={require('../Images/images7.jpg')} style={{width:110, height:110,resizeMode:'contain'}}/>
                </View>
              </View>
              <View style={{ flex:1.2,flexDirection:'row',alignItems:'center',justifyContent:'center', }}>
                <View style={{ flex:0.6,margin:5,borderRadius:30,backgroundColor:'black',alignItems:'center',justifyContent:'center', }}>
                  <TouchableOpacity style={{ width:200,height:30,alignItems:'center',justifyContent:'center' }}>
                    <Text style={{ color:'white',textAlign:'center',fontSize:15 }}>Add to Cart</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ flex:0.6,margin:5,alignItems:'center',justifyContent:'center',borderRadius:30,backgroundColor:'black' }}>
                  <TouchableOpacity style={{ width:200,height:30,alignItems:'center',justifyContent:'center' }}>
                    <Text style={{ color:'white',textAlign:'center',fontSize:15 }}>Add to Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )
        }
      })()
}
        {/* <TouchableOpacity style={{ backgroundColor:'red' }}onPress={ () => { Actions.ss()} }>
        </TouchableOpacity> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height:170,
    borderBottomColor:'black',
    borderBottomWidth:1
  },
  welcome: {
    fontSize: 10,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});
