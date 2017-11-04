// app/ScarletScreen.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  PermissionsAndroid,
  ScrollView,
  FlatList,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
var ImagePicker = require('react-native-image-picker');
import GreyScreen from './GreyScreen'
export default class CutomerDashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      imgResponse:'',
      avatarSource:'',
      photos:[1,2,3,4,5,6,7,8],
      PicturePath:'',
      AllPhotos:[]
      }
    }
  componentWillMount(){
    console.log('props  list is',this.props.screenProps );

  }
  _keyExtractor = (item, index) => item.id;
  render(){
    return (
      <View style={styles.container}>
        <View style={ styles.headerView }>
          <Text style={ styles.headerText }>Customer Dashboard</Text>
        </View>
        <ScrollView style={{ }}>
          <View style={{  }}>
            <TouchableOpacity style={ styles.DrawerViews } >
              <View style={ styles.imageView }><Image style={ styles.image } source={require('../Images/stock.png')} ></Image></View>
              <View  style={ styles.textView }><Text style={ styles.DrawerText }>Order History</Text></View>
              <View style={ styles.arrowImageView }><Image style={ styles.arrowImage } source={require('../Images/arrow.png')} ></Image></View>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.DrawerViews} >
              <View style={ styles.imageView }><Image style={ styles.image } source={require('../Images/staff.png')} ></Image></View>
              <View  style={ styles.textView }><Text style={ styles.DrawerText }>Payment History</Text></View>
              <View style={ styles.arrowImageView }><Image style={ styles.arrowImage } source={require('../Images/arrow.png')} ></Image></View>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.DrawerViews} >
              <View style={ styles.imageView }><Image style={ styles.image } source={require('../Images/cardriver.png')} ></Image></View>
              <View  style={ styles.textView }><Text style={ styles.DrawerText }>Trach Order</Text></View>
              <View style={ styles.arrowImageView }><Image style={ styles.arrowImage } source={require('../Images/arrow.png')} ></Image></View>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.DrawerViews} >
              <View style={ styles.imageView }><Image style={ styles.image } source={require('../Images/stocknotif.png')} ></Image></View>
              <View  style={ styles.textView }><Text style={ styles.DrawerText }>Update Sizes</Text></View>
              <View style={ styles.arrowImageView }><Image style={ styles.arrowImage } source={require('../Images/arrow.png')} ></Image></View>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.DrawerViews} >
              <View style={ styles.imageView }><Image style={ styles.image } source={require('../Images/staffnotif.png')} ></Image></View>
              <View  style={ styles.textView }><Text style={ styles.DrawerText }>Announcement</Text></View>
              <View style={ styles.arrowImageView }><Image style={ styles.arrowImage } source={require('../Images/arrow.png')} ></Image></View>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.DrawerViews } >
              <View style={ styles.imageView }><Image style={ styles.image } source={require('../Images/cardriver.png')} ></Image></View>
              <View  style={ styles.textView }><Text style={ styles.DrawerText }>New Article</Text></View>
              <View style={ styles.arrowImageView }><Image style={ styles.arrowImage } source={require('../Images/arrow.png')} ></Image></View>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.DrawerViews } >
              <View style={ styles.imageView }><Image style={ styles.image } source={require('../Images/cardriver.png')} ></Image></View>
              <View  style={ styles.textView }><Text style={ styles.DrawerText }>Complain Now</Text></View>
              <View style={ styles.arrowImageView }><Image style={ styles.arrowImage } source={require('../Images/arrow.png')} ></Image></View>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.DrawerViews } >
              <View style={ styles.imageView }><Image style={ styles.image } source={require('../Images/cardriver.png')} ></Image></View>
              <View  style={ styles.textView }><Text style={ styles.DrawerText }>Accept Payment</Text></View>
              <View style={ styles.arrowImageView }><Image style={ styles.arrowImage } source={require('../Images/arrow.png')} ></Image></View>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.DrawerViews} >
              <View style={ styles.imageView }><Image style={ styles.image } source={require('../Images/cardriver.png')} ></Image></View>
              <View  style={ styles.textView }><Text style={ styles.DrawerText }>Trach Order</Text></View>
              <View style={ styles.arrowImageView }><Image style={ styles.arrowImage } source={require('../Images/arrow.png')} ></Image></View>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.DrawerViews } >
              <View style={ styles.imageView }><Image style={ styles.image } source={require('../Images/stock.png')} ></Image></View>
              <View  style={ styles.textView }><Text style={ styles.DrawerText }>Order History</Text></View>
              <View style={ styles.arrowImageView }><Image style={ styles.arrowImage } source={require('../Images/arrow.png')} ></Image></View>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.DrawerViews} >
              <View style={ styles.imageView }><Image style={ styles.image } source={require('../Images/stocknotif.png')} ></Image></View>
              <View  style={ styles.textView }><Text style={ styles.DrawerText }>Update Sizes</Text></View>
              <View style={ styles.arrowImageView }><Image style={ styles.arrowImage } source={require('../Images/arrow.png')} ></Image></View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black'
  },
  headerView:{
    backgroundColor:'black',
    height:50,
    justifyContent:'center'
  },
  headerText:{
    color:'white',
    textAlign:'center',
    fontSize:20
  },
  photosListView:{
    flex:5,
    backgroundColor:'#1e1e1e',
    margin:10,
    borderRadius:20
  },
  image:{
    margin:2,
    width:100,
    height:100,
  },
  list:{
  },
  DrawerViews:{
    flexDirection:'row',
    height:60,
    borderBottomWidth:1,
    borderBottomColor:'#3c3c3c',
    alignItems:'center'
  },
  DrawerText:{
    color:'white',
    fontSize:17,
    backgroundColor:'transparent'
  },
  image:{
    height:45,
    width:45,
    resizeMode:'contain',
    justifyContent:'center',
    alignSelf: 'center',
  },
  imageView:{
    flex:1,
  },
  textView:{
    flex:2.5
  },
  arrowImageView:{
    flex:0.5
  },
  arrowImage:{
    height:20,
    width:20,
    resizeMode:'contain',
    justifyContent:'center',
    alignSelf: 'center',
  }
});
