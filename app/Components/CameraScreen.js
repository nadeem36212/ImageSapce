
  import React, { Component } from 'react';
  import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    PermissionsAndroid,
    ScrollView,
    Image
  } from 'react-native';
  import { Actions } from 'react-native-router-flux';
  var ImagePicker = require('react-native-image-picker');
  import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
  import Icon from 'react-native-vector-icons/MaterialIcons'
  import HomeScreen from './HomeScreen';
  import GreyScreen from './GreyScreen';
  import TopCategoryTab from './TopCategoryTab';
  import LatestStyleTab from './LatestStyleTab';
  import CustomerOrder from './CustomerOrder';

  import TabNavigator from 'react-native-tab-navigator';

  export default class ScarletScreen extends Component {
    constructor(props){
      super(props)
      this.state = {
        selectedTab:'HomeScreen'
      }
    }
  render(){
    return (
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'HomeScreen'}
            title="Bride Style"
            renderIcon={() => (<Image source={require('../Images/images5.jpg')} style={{width:30, height:30,resizeMode:'contain'}} />) }
            renderSelectedIcon={() => <Image source={require('../Images/images5.jpg')} style={{width:30, height:30,resizeMode:'contain'}} />}
            titleStyle={styles.tabTitle}
            tabStyle={styles.tab}
            onPress={() => {
                this.setState({
                    selectedTab: 'HomeScreen',
                });
            }}
            >
          <HomeScreen screenProps={ 'HomeScreen' }/>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'TopCategoryTab'}
            title="Top Category"
            renderIcon={() => (<Image source={require('../Images/images4.jpg')} style={{width:30, height:30,resizeMode:'contain'}} />) }
            renderSelectedIcon={() => <Image source={require('../Images/images4.jpg')} style={{width:30, height:30,resizeMode:'contain'}} />}
            titleStyle={styles.tabTitle}
            tabStyle={styles.tab}
            onPress={() => {
                this.setState({
                    selectedTab: 'TopCategoryTab',
                });
            }}
            >
          <TopCategoryTab screenProps={ 'TopCategoryTab' }/>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'LatestStyleTab'}
            title="Latest Style"
            renderIcon={() => (<Image source={require('../Images/images7.jpg')} style={{width:30, height:30,resizeMode:'contain'}} />) }
            renderSelectedIcon={() => <Image source={require('../Images/images7.jpg')} style={{width:30, height:30,resizeMode:'contain'}} />}
            titleStyle={styles.tabTitle}
            tabStyle={styles.tab}
            onPress={() => {
                this.setState({
                    selectedTab: 'LatestStyleTab',
                });
            }}
            >
          <LatestStyleTab screenProps={ 'LatestStyleTab' }/>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'CustomerOrder'}
            title="Custom Order"
            renderIcon={() => (<Image source={require('../Images/images.jpg')} style={{width:30, height:30,resizeMode:'contain'}} />) }
            renderSelectedIcon={() => <Image source={require('../Images/images.jpg')} style={{width:30, height:30,resizeMode:'contain'}} />}
            titleStyle={styles.tabTitle}
            tabStyle={styles.tab}
            onPress={() => {
                this.setState({
                    selectedTab: 'CustomerOrder',
                });
            }}
            >
          <CustomerOrder screenProps={ 'CustomerOrder' }/>
          </TabNavigator.Item>
        </TabNavigator>
    );
  }
}
{/*
  <BottomNavigation
   labelColor="white"
   rippleColor="white"
   style={{ height: 56, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0 }}
   onTabChange={(newTabIndex) => { Actions.HomeScreen() }}
 >

   <Tab
     barBackgroundColor="#37474F"
     label="Movies & TV"
     icon={<Icon size={24} color="white" name="tv" />}
   />
   <Tab
     barBackgroundColor="#00796B"
     label="Music"
     icon={<Icon size={24} color="white" name="music-note" />}
   />
   <Tab
     barBackgroundColor="#5D4037"
     label="Books"
     icon={<Icon size={24} color="white" name="book" />}
   />
   <Tab
     barBackgroundColor="#3E2723"
     label="Newsstand"
     icon={<Icon size={24} color="white" name="newspaper" />}
   />
 </BottomNavigation>




  <View style={styles.container}>
    <View style={ styles.ChildContainer }>
      <View style={ styles.headerView }>
        <Text style={ styles.headerText }>Take Pictues</Text>
      </View>
      <View style={ styles.CamerView }>
        <ScrollView >
          <View style={ styles.CamerChildView }>
            <View style={ styles.ImageView }>
              <Image source={{ uri: this.state.PicturePath }} style={ styles.Image }/>
            </View>
            <View style={ styles.CamerBtnView }>
              <TouchableOpacity style={ styles.CameraBtn } onPress={ this.requestCameraPermission.bind(this) }>
                <Text style={ styles.btnText }>
                  Camera
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={ styles.SeePhotosView }>
        <TouchableOpacity style={ styles.SeePhotosBtn } onPress={ () =>{ Actions.HomeScreen({ photosList:this.state.photos }) }}>
          <Text style={ styles.btnText }>
            See all Photos
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ChildContainer:{
    backgroundColor:'black',
    flex:5
  },
  btnText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight:'bold',
    color:'black'
  },
  headerView:{
    height:50,
    justifyContent:'center',
    alignItems:'center'
  },
  headerText:{
    color:'white',
    fontSize:20
  },
  CamerView:{
    flex:4,
    backgroundColor:'#1e1e1e',
    margin:20,
    borderRadius:20
  },
  CamerChildView:{
    flex:4,
    alignItems:'center',
    justifyContent:'center'
  },
  ImageView:{
    flex:3,
    marginTop:30
  },
  Image:{
    width:300,
    height:300,
    resizeMode:'contain'
  },
  CamerBtnView:{
    flex:1,
    alignItems:'center'
  },
  CameraBtn:{
    backgroundColor:'#fff100',
    margin:20,
    borderRadius:20,
    width:200
  },
  SeePhotosView:{
    backgroundColor:'#1e1e1e',
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20
  },
  SeePhotosBtn:{
    backgroundColor:'#fff100',
    width:300,
    borderRadius:20
  }
});
