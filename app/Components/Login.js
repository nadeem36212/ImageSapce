import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class login extends Component{

  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }
  render(){

    return(
       <View style = {{flex:1 ,marginTop:0}}>
        <ScrollView style ={{flex:1}}>
          <View style = {{flex:5,margin:35}}>

            <KeyboardAvoidingView scrollEnabled={false} >

             <View style = {{flex:2,justifyContent:'center',alignItems:'center'}}>
               <Image style={{resizeMode:'contain',height:300,width:290,marginLeft:0}}
                  source = {require('../Images/Logo.png')}>
               </Image>
             </View>
             <View style={{flex:0.8,backgroundColor: 'white',margin:5,borderRadius:40}}>
                <TextInput placeholder="Enter email " underlineColorAndroid='white'  placeholderTextColor='gray'
                  style={{fontSize:20,marginLeft:20,height:45}}/>
             </View>
             <View style = {{flex:0.8,backgroundColor:'white',margin:5,borderRadius:40}}>
                <TextInput placeholder="Enter password" underlineColorAndroid='white' placeholderTextColor='gray'
                   style={{fontSize:20,marginLeft:20,height:45 }} />
             </View>
             <View style = {{flex:1.4,borderRadius:20,marginTop:20,backgroundColor:'black',height:40,alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity  style={{ alignItems:'center',justifyContent:'center' }}>
                   <Text style={{fontSize:20,fontWeight:'bold',color:'white'}} >
                   Sign In</Text>
                </TouchableOpacity>
             </View>
             <View style = {{flex:1.4,borderRadius:20,marginTop:10,alignItems:'center',justifyContent:'center',backgroundColor:'black',height:40}}>
                <TouchableOpacity onPress={()=> Actions.SignUp()} style={{ alignItems:'center',justifyContent:'center' }}>
                   <Text style={{alignItems:'center',justifyContent:'center',fontSize:20,fontWeight:'bold',color:'white'}} >
                   Sign Up</Text>
                </TouchableOpacity>
             </View>
             </KeyboardAvoidingView>
           </View>
        </ScrollView>
       </View>
    );
  }
}
