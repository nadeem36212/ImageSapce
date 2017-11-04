
  import React, { Component } from 'react';
  import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    PermissionsAndroid,
    ScrollView,
    Image,
    TextInput
  } from 'react-native';
  import { Actions } from 'react-native-router-flux';
  var ImagePicker = require('react-native-image-picker');
  import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';

  let defaultPhoto = require('../Images/images7.jpg');

  export default class CustomerOrder extends Component {
    constructor(props){
      super(props)
      this.state = {
        imgResponse:'',
        avatarSource:'',
        photos:[],
        PicturePath: '',
      }
    }
    requestCameraPermission() {
      try {
        const granted = PermissionsAndroid.requestMultiple(
          [
            PermissionsAndroid.PERMISSIONS.CAMERA,
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
          ],
          {
            'title': 'Camera and External Storage Permission',
            'message': 'Cool Photo App needs access to your camera ' +
                       'so you can take awesome pictures.'
          }
        );
        granted.then((response) => {
          console.log(response);
          if (response) {
            this.showImagePicker();
          } else {
            console.log("Camera permission denied")
          }
        });
      } catch (err) {
        console.warn(err)
      }
    }
    showImagePicker(){
    this.setState({ flag:true })
    var options = {
      title: 'Select Avatar',
      customButtons: [
        { name: 'fb', title: 'Choose Photo from Facebook' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };
    var options = {
      title: 'Select a Photo',
      cancelButtonTitle: 'Cancel',
      takePhotoButtonTitle: 'Take Photo…',
      chooseFromLibraryButtonTitle: 'Choose from Library…',
      quality: 1.0,
      allowsEditing: false,
      permissionDenied: {
        title: 'Permission denied',
        text: 'To be able to take pictures with your camera and choose images from your library.',
        reTryTitle: 're-try',
        okTitle: 'I\'m sure',
      }
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };
        console.log('========================' + response.uri);
        this.state.photos.push(response.uri);
        this.setState({
          PicturePath:response.uri,
          avatarSource: source,
        });
        console.log('============================' + this.state.photos.toString());
      }
    });
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={ styles.ChildContainer }>
          <View style={ styles.headerView }>
            <Text style={ styles.headerText }>Take Pictues</Text>
          </View>
          <View style={ styles.CamerView }>
            <ScrollView >
              <View style={ styles.CamerChildView }>
                <View style={ styles.ImageView }>
                  {
                    (() =>{
                      if (this.state.PicturePath == '') {
                        return(
                          <Image source={defaultPhoto} style={ styles.Image }/>
                        );
                      }else {
                        return (
                          <Image source={{ uri: this.state.PicturePath }} style={ styles.Image }/>
                        );
                      }
                    })()
                  }
                </View>
                <View style={styles.input} >
                    <TextInput
                      onSubmitEditing={() => this.inputLastname.focus()}
                      placeholder="Expected Price"
                      returnKeyType="next"
                      style={styles.textInput}
                      onChangeText={(text) => this.setState({ first_name: text })}
                      placeholderTextColor='rgba(0,0,0,0.4)'
                      underlineColorAndroid='transparent'
                    />
                  </View>
                  <View style={styles.input} >
                      <TextInput
                        onSubmitEditing={() => this.inputLastname.focus()}
                        placeholder="Expected Date"
                        returnKeyType="next"
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({ first_name: text })}
                        placeholderTextColor='rgba(0,0,0,0.4)'
                        underlineColorAndroid='transparent'
                      />
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
            <TouchableOpacity style={ styles.SeePhotosBtn } onPress={ () => { Actions.Login() }}>
              <Text style={ styles.btnText }>
                Process Order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ChildContainer:{
    flex:5
  },
  btnText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight:'bold',
    color:'white'
  },
  headerView:{
    height:50,
    backgroundColor:'black',
    justifyContent:'center',
    alignItems:'center'
  },
  headerText:{
    color:'white',
    fontSize:20
  },
  CamerView:{
    flex:4,
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
    marginTop:10
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
    backgroundColor:'black',
    margin:20,
    borderRadius:20,
    width:250
  },
  SeePhotosView:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20
  },
  SeePhotosBtn:{
    backgroundColor:'black',
    width:300,
    borderRadius:20
  },
  input:{
  backgroundColor:'white',
  height:50,
  marginBottom:10,
  padding:0,
  borderRadius:10,
  width:250,
  marginTop:10
},
textInput: {
    padding:10,
    height:50,
  },
});
