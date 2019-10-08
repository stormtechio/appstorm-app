/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
  
  

} from 'react-native/Libraries/NewAppScreen';

import { 
  createAppContainer, 
  createStackNavigator, 
  StackActions, 
  NavigationActions, 
  createBottomTabNavigator

 } from 'react-navigation';


 import { 
  ScrollNavigator, 
  NavigatorContent,
  NavigatorBox, 
  Title,
  HomeContainer,
  SwiperContainer,
  SwiperItemMock
 } from './styled';

 import { 
   BottomNavigator
 } from './bottom-navigator';

 


 import { SearchBar,
  Icon
 } from 'react-native-elements';

//  import { Searchbar } from 'react-native-paper';

import Product from './product'

import Carrinho from './carrinho'

import Pedido from './pedidos'

import Perfil from './perfil'
class Login extends React.Component{

  static navigationOptions = {
    header: null
  };

render(){

  return(
      <View style={styles.view}>
      
      
        <View>
        <Text style={styles.logo}>AppStorm</Text>
        </View>

          <View>
          {/* <Text style={styles.user}>User</Text> */}
          <TextInput style={styles.input} placeholder=" User"></TextInput>
          </View>

          <View>
          {/* <Text style={styles.password}>Password</Text> */}
          <TextInput style={styles.input} placeholder=" Password"
          secureTextEntry
          
          ></TextInput>
          </View>

          <View style={styles.buttonLogin}>
            <Button 
             title="Login"
             color="#0091EA"
             onPress={() => this.props.navigation.navigate('Main') }
             />
          </View>

          <View style={styles.buttonPassword}>
           
        <TouchableHighlight>
         <Text style={styles.textHight}> Esqueci minha senha!</Text>
        </TouchableHighlight>
       


          </View>

          <View style={styles.buttonRegister}>
            <Button 
             title="Cadastre-se!"
             color="#0277BD"

            //  onPress={() => {
            //   this.props.navigation.dispatch(StackActions.reset({
            //     index: 0,
            //     actions: [
            //       NavigationActions.navigate({ routeName: 'Register' })
            //     ],
            //   }))
            // }}
            onPress={() => this.props.navigation.navigate('Register') }

             />
          </View>

      </View>
  );
}
}




class Register extends React.Component {

  constructor(props){
      super(props)
      //const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

      this.state = {
        userName:'',
        userEmail:'',
        userPassword:'',
          dataSource:[],
          loading: true,
       // dataSource: ds.cloneWithRows(['row 1', 'row 2']),
      }
  }

  static navigationOptions = {
    title:"Register" 
  };

  userRegister = () => {
    
    const {userName} = this.state;
    const {userEmail} = this.state;
    const {userPassword} = this.state;

      fetch('http://192.168.1.12:5000/users', {

        method: 'POST',
        headers:{

          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
            password: userPassword
        })

      })
      .then((response) => response.json())
            .then((responseJson) => {

              // for (var i = 0; i < responseJson.length; i++)
              // {
    
    
              //     this.setState({ dataSource: this.state.dataSource.cloneWithRows(responseJson[i]) });
              // }

              this.setState({ dataSource: responseJson, loading: false});

            //  alert(responseJson);
            })
            .catch((error) => {
              alert(error);
             // console.error(error);
            });
  }

  render() {
    return (
      <View style={styles.view}>
  <ScrollView>

        <View>
        <Text style={styles.logoRegister}>AppStorm</Text>
        </View>
      

        <View>
          <TextInput style={styles.input} placeholder=" Name"
          onChangeText = {userName => this.setState({userName})}
          
          ></TextInput>
          </View>

          <View>
          <TextInput style={styles.input} placeholder=" Email"
           onChangeText = {userEmail => this.setState({userEmail})}
          ></TextInput>
          </View>
          <View>

          <TextInput style={styles.input} placeholder=" Password"
          secureTextEntry
          onChangeText = {userPassword => this.setState({userPassword})}
          ></TextInput>
          </View>

          <View style={styles.buttonLogin}>
            <Button 
             title="Save"
             color="#0091EA"
             onPress={this.userRegister}
             />
          </View>


          {/* <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) => <Text>{rowData}</Text>}
            /> */}

            <FlatList
            data={this.state.dataSource}
            renderItem={(data) => <Text>{data.item}</Text>}
            />

          </ScrollView>
      </View>
    );
  }  
}




class Main extends React.Component {

  static navigationOptions = {
    header:null
  };

  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

render(){

  const { search } = this.state;


return(

<HomeContainer style={{backgroundColor:'#1565c0'}}>

<SearchBar 
         
          searchIcon={<Icon
           name='ios-search'
           type='ionicon'
           color='#517fa4' />}
        
          platform="android"
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
       />  

        <StatusBar
          barStyle="light-content"
        />
        <SwiperContainer/>

        
        <BottomNavigator navigation={this.props.navigation}/>
</HomeContainer>

);

}

  }







  const styles = StyleSheet.create({
    logo:{
      fontSize:40,
      textAlign:"center",
      margin:75,
      color:"#424242"
      
    },
    input:{
    
      margin:10,
      height: 40, 
      borderColor: '#FFF', 
      borderWidth: 1,
      marginLeft:20,
      marginRight:20,
      borderRadius:10,
      backgroundColor:"#FFF"
    },

    user:{
      
      fontSize:20,
      marginLeft:40,
      color:"#424242"
      
    },
    password:{
      
      fontSize:20,
      marginLeft:40,
      color:"#424242"  
    },
    buttonLogin:{
      alignItems:"stretch",
      margin:20,
      marginLeft:20,
      marginRight:20
     
        
    },
    buttonPassword:{
      alignItems:"center",
      margin:20
    },
    buttonRegister:{
      alignItems:"stretch",
      margin:20,
      marginLeft:110,
      marginRight:110
    },
    textHight:{
      fontSize:18,
      color: "#9E9E9E"
    },
    view:{
      flex: 1,
      backgroundColor: "#F5F5F5"
    },
    viewRegister:{
      justifyContent:'center',
      flex: 1,
      backgroundColor: "#F5F5F5"
    }, 
    logoRegister:{
      fontSize:40,
      textAlign:"center",
      margin:50,
      color:"#424242"
      
    },
  
   
});










const AppNavigator = createStackNavigator({
 
  Login: Login,
  Register: Register,
  Main: Main,
  Product: Product,
  Carrinho: Carrinho,
  Pedido: Pedido,
  Perfil: Perfil
 }, 
 {
    initialRouteName: 'Login',
}
);



// const AppNavigator = 
//   createBottomTabNavigator({
//     Login: {
//           screen: Login,
//         },
//         Details: {
//           screen: DetailsScreen,
          
      
//         },
//   });



export default createAppContainer(AppNavigator);


























// const App = () => {
//   return (
//     <Fragment>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </Fragment>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;
