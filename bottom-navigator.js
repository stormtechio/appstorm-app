import React, {
    Component
  } from 'react';
   
   import { 
    ScrollNavigator, 
    NavigatorContent,
    NavigatorBox, 
    Title,
    Icon
   } from './styled'
  
   import { 
    createAppContainer, 
    createStackNavigator, 
    StackActions, 
    NavigationActions, 
    createBottomTabNavigator
  
   } from 'react-navigation';

    

import { Alert } from 'react-native';
   export class BottomNavigator extends Component {


    constructor(props){
      super(props)
    }

    state = {
      menuItems: [
        { name: 'Produtos' },
        { name: 'Carrinho'},
        { name: 'Pedidos'},
        { name: 'Perfil'},
      ],
    }
       renderMenusItems = ({ name }, index) => (

        
      <NavigatorBox 
     
     
      onPress={() => 
        {if(name == 'Produtos'){
          this.props.navigation.navigate('Product')
        }else if(name == 'Carrinho'){
          this.props.navigation.navigate('Carrinho')
        }else if(name == 'Pedidos'){
          this.props.navigation.navigate('Pedido')
        }else if(name == 'Perfil'){
          this.props.navigation.navigate('Perfil')
        }
        }
      }
       
      key={`${name}-${index}`}>
         {/* <Icon height={40} width={40}  />  */}


         {/* onPress={() => 
        {if(index == 0){
          this.props.navigation.navigate('Product')
        }else if(index == 1){
          this.props.navigation.navigate('Carrinho')
        }else if(index == 2){
          this.props.navigation.navigate('Pedido')
        }else if(index == 3){
          this.props.navigation.navigate('Perfil')
        }
        }
      } */}

         
        <Title>{name}</Title>
      </NavigatorBox>
    )
    
    render() {
    
      const { menuItems } = this.state
     
    
      return (
    <NavigatorContent>
        
        <ScrollNavigator 
        // style={styles.ScrollNavigator}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {menuItems.map(this.renderMenusItems)}
    
        </ScrollNavigator>
      </NavigatorContent>
    
      );
    }
    }



