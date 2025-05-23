import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import CadastroScreen from './screens/CadastroScreen';
import HomeScreen from './screens/HomeScreen';
import CadastroEventoScreen from './screens/CadastroEventoScreen';
import CadastroOrganizadorScreen from './screens/CadastroOrganizadorScreen';
import CadastroIngressoScreen from './screens/CadastroIngressoScreen';
import Layout from "./components/Layout";
import Login from "./screens/LoginScreen";
import Cadastro from "./screens/CadastroScreen"
import TaskList from './screens/TaskList';
import TaskDetail from './screens/TaskDetail';
import EventoScreen from './screens/EventoScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={()=>(
          <Layout>
            <Login />
          </Layout>
        )} />
        <Stack.Screen 
           name="Cadastro" 
           component={()=>(
          <Layout>
            <Cadastro />
          </Layout>
        )} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CadastroEvento" component={CadastroEventoScreen} />
        <Stack.Screen 
          name="CadastroOrganizador" 
          component={CadastroOrganizadorScreen} />
        <Stack.Screen 
          name="CadastroIngresso" 
          component={CadastroIngressoScreen} />
          <Stack.Screen name="EventoScreen">
            {() => (
              <Layout>
                <EventoScreen/>
              </Layout>
            )}
          </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
