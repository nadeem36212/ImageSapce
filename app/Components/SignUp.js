import React, { Component } from 'react';
import {
    Image,
    View,
    Text,
    TextInput,
    ScrollView,
    KeyboardAvoidingView,
    TouchableOpacity,

} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class SignUp extends Component{
  render(){

    return(
      <View style = {{flex:1 ,}}>
      <ScrollView style = {{flex:1}}>
        <KeyboardAvoidingView >

      {/* <Header  style={{backgroundColor:'black'}}>
          <Body style={{justifyContent:'center',alignItems:'center'}}><Title>Register</Title></Body>
      </Header> */}
         <View style = {{flex:8 ,margin:35,marginTop:20}}>

           <View style={{flex:1,borderRadius:20,backgroundColor:'white',margin:5}}>
              <TextInput placeholder="Name" underlineColorAndroid='white' style={{fontSize:20,height:45,marginLeft:20}} />
           </View>

           <View style={{flex:1,borderRadius:20,backgroundColor:'white',margin:5}}>
              <TextInput placeholder="Email" underlineColorAndroid='white' style={{fontSize:20,height:45,marginLeft:20}} />
           </View>
           <View style={{flex:1,borderRadius:20,backgroundColor:'white',margin:5}}>
              <TextInput placeholder="Password" underlineColorAndroid='white' style={{fontSize:20,height:45,marginLeft:20}} />
           </View>
           <View style={{flex:1,borderRadius:20,backgroundColor:'white',margin:5}}>
              <TextInput placeholder="Confirm Password" underlineColorAndroid='white' style={{fontSize:20,height:45,marginLeft:20}} />
           </View>
           <View style={{flex:1,marginTop:100,
                backgroundColor:'black',borderRadius:20,justifyContent:'center',alignItems:'center',height:45,}}>
                 <TouchableOpacity >
                    <Text style={{fontSize:25,fontWeight:'bold',marginBottom:0,color:'white'}} >Submit</Text>
                 </TouchableOpacity>
           </View>

         </View>
         </KeyboardAvoidingView>
       </ScrollView>
      </View>
    );
  }
}
