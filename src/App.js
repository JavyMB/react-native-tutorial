import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common/Header';
import LoginForm from './components/LoginForm'; 
class App extends Component {
    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyCXWQWDNAkOA5qzCoV-9_iScgR6bXI00KM",
            authDomain: "quickbeacon.firebaseapp.com",
            databaseURL: "https://quickbeacon.firebaseio.com",
            projectId: "quickbeacon",
            storageBucket: "quickbeacon.appspot.com",
            messagingSenderId: "397940591014"
          });
    }
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
               <LoginForm/>
            </View>
        );
    }
}
export default App;