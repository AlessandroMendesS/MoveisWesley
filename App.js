import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Importa telas
import CriacaoInterface from './screens/CriacaoInterface';
import EstruturaLayout from './screens/EstruturaLayout';
import TiposLayout from './screens/TiposLayout';
import GerenciadorLayout from './screens/GerenciadorLayout';
import ComponentesTela from './screens/ComponentesTela';
import DialogoModal from './screens/DialogoModal';
import BarraAcao from './screens/BarraAcao';
import ControleElementos from './screens/ControleElementos'; // Adicionado
import TratamentoExcecoes from './screens/TratamentoExcecoes'; // Adicionado
import ManipulacaoListas from './screens/ManipulacaoListas';
import EntradaSaida from './screens/EntradaSaida';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="2. Criação de Interface">
        <Drawer.Screen name="2. Criação de Interface" component={CriacaoInterface} />
        <Drawer.Screen name="2.1.1 Estrutura" component={EstruturaLayout} />
        <Drawer.Screen name="2.1.2 Tipos" component={TiposLayout} />
        <Drawer.Screen name="2.1.3 Gerenciadores" component={GerenciadorLayout} />
        <Drawer.Screen name="2.1.4 Componentes" component={ComponentesTela} />
        <Drawer.Screen name="2.1.6 Diálogos" component={DialogoModal} />
        <Drawer.Screen name="2.1.7 Barra de Ação" component={BarraAcao} />
        <Drawer.Screen name="2.2 Controle de Elementos" component={ControleElementos} />
        <Drawer.Screen name="2.2.1 Tratamento de Exceções" component={TratamentoExcecoes} />  
        <Drawer.Screen name="2.2.2 Manipulação de listas" component={ManipulacaoListas} />    
         <Drawer.Screen name="2.2.3 Entrada e Saídas" component={EntradaSaida} />          
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
