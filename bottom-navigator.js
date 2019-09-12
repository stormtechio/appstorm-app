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
  

   export class BottomNavigator extends Component {
    state = {
      menuItems: [
        { name: 'Produtos' },
        { name: 'Carrinho'},
        { name: 'Pedidos'},
        { name: 'Perfil'},
      ],
    }
       renderMenusItems = ({ name }, index) => (
      <NavigatorBox key={`${name}-${index}`}>
         {/* <Icon height={40} width={40}  />  */}
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
