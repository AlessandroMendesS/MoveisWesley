import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Importa telas
import CriacaoInterface from './screens/CriacaoInterface';
import EstruturaLayout from './screens/EstruturaLayout';
import TiposLayout from './screens/TiposLayout';
import GerenciadorLayout from './screens/GerenciadorLayout';
import ComponentesTela from './screens/ComponentesTela';
import BarraAcao from './screens/BarraAcao';
import ControleElementos from './screens/ControleElementos'; // Adicionado
import ManipulacaoListas from './screens/ManipulacaoListas'; // Adicionado
import EntradaSaida from './screens/EntradaSaida'; // Adicionado
import TratamentoExcecoes from './screens/TratamentoExcecao';




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
        <Drawer.Screen name="2.1.7 Barra de Ação" component={BarraAcao} />
        <Drawer.Screen name="2.2 Controle de Elementos" component={ControleElementos} />
        
        <Drawer.Screen name="2.2.2 Manipulação Listas" component={ManipulacaoListas} />
        <Drawer.Screen name="2.2.3 Entrada e Saída" component={EntradaSaida} />
        <Drawer.Screen name="2.2.4 Passagem Parâmetros entre Telas" component={EntradaSaida} />
        <Drawer.Screen name="2.2.1 Tratamento de Exceções " component={TratamentoExcecoes} />
  

        
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
