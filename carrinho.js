
import React, {
    Fragment,
    Component,
  
    
  } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Button,
    TouchableHighlight,
    FlatList,
    ListView
    
  } from 'react-native';

  export default class Carrinho extends React.Component{

    constructor(props){
             super(props)
    }

    static navigationOptions = {
        title:"Carrinho" 
      };

    // static navigationOptions = {
    //     title:"Product" 
    //   };

    // constructor(props){
    //     super(props)
       
    //     this.state = {
    //       dataSource:[],
         
    //     }
    // }

    // componentDidMount = () => {
    //     fetch('http://192.168.1.14:5000/products/menu', {
    //        method: 'GET'
    //     })
    //     .then((response) => response.json())
    //     .then((responseJson) => {
    //        //console.log(responseJson);
    //        this.setState({
    //           dataSource: responseJson
    //        })
    //     })
    //     .catch((error) => {
    //        console.error(error);
    //     });
    //  }

    render(){
       
        return(
            
            <View>

                <Text>Carrinho</Text>
            
                {/* <FlatList
            data={this.state.dataSource}
            renderItem={({item}) => <Text>
                <Text>Name: {item.name}</Text>{"\n"}
                <Text>Description: {item.description}</Text>{"\n"}
                <Text>Price: {item.price}</Text>
           
            </Text>
        }
            />  */}


            </View>
        );
    }
}


