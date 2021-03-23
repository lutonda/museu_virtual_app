import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios';
const ProfileScreen = () => {

var events=[];
  axios.get('http://192.168.100.17:7000/api/events/')
  .then(function (data) {
    alert('success')
        if (data === null) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                { text: 'Okay' }
            ]);
            return;
        } else{
          this.events=data.data
            alert(JSON.stringify(data));
        }
  })
  .catch(function (err) {
      alert('err')
      alert(JSON.stringify(err));
      if(err.id!==undefined){

      }
    Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
        { text: 'Okay' }
    ]);
  });
  var showAlert=()=>alert('Button Clicked and Called from outside!')
  
    return (
      <View style={styles.container}>
        <Text>Profile Screen</Text>
        <Button
          title={'~'+events.length+'~'}
          onPress={() => showAlert()}
        />
      </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
