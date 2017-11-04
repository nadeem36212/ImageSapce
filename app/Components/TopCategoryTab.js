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
export default class TopCategoryTab extends Component {
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
        {/* <View style={ styles.headerView }>
          <Text style={ styles.headerText }>Photos List</Text>
        </View> */}
        <View style={{ flex:1,margin:1 }}>
            <ScrollView>
              <FlatList
                contentContainerStyle={ styles.list }
                keyExtractor={ this._keyExtractor }
                data={ this.state.photos }
                horizontal={false}
                renderItem={ ({item,index}) =><GreyScreen key={ index } screenProps={ this.props.screenProps }/>}
              />
            </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  }
});
