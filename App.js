import React, {useState} from 'react';
import { StyleSheet, View , Image, Text, TextInput, Switch} from 'react-native';



export default function App() {

const COLOR_PURPLE = '#190933'
const [isSwitchOff, setSwitchState] = useState(false);
const toggleSwitch = (value) => {
  setSwitchState(value);
};
  var isPasswordHidden = !isPasswordHidden;

  return (
    <View style={{backgroundColor:'white'}}>
      <View nativeID='vwLogo' style={{alignItems:'center'}}>
          <Image  style={{width:128, height:128}}
          source={require('./assets/logo.png')}
          />
       
          <Text style={{color: COLOR_PURPLE, fontSize: 36, fontWeight:'bold'}}> Medsys</Text>
          </View>
          
      
  
        <View nativeID='vwInfos'>
          <TextInput style={{width:'93%', height: 40, margin: 10, padding: 5, borderWidth: 1, borderColor: COLOR_PURPLE}}
            placeholder = 'E-MAIL'
            />
          <View nativeID='vwPassword' style={{flexDirection:'row'}}>
            <TextInput
              secureTextEntry={isPasswordHidden ? true : false }
              style={{width: '80%', height: 40, margin:10, padding:5 , borderWidth: 1, borderColor: COLOR_PURPLE}}
              placeholder='SENHA'
            />
            <Switch
            onValueChange ={toggleSwitch}
            value={isSwitchOff}
            />
          </View>

        </View>

        <View nativeID='vwBotao'> </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
