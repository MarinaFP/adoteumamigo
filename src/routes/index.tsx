import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Telainicial } from '../pages/TelaInicial';
import { Login } from '../pages/Login';
import { Menu } from '../pages/Menu';
import { Adicionar } from '../pages/Adicionar';
import { Procurar } from '../pages/Procurar';


const Stack = createNativeStackNavigator()
export function Routes (){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Telainicial">
                <Stack.Screen name="Telainicial" component={Telainicial}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Menu" component={Menu}/>
                <Stack.Screen name="Adicionar" component={Adicionar}/>
                <Stack.Screen name="Procurar" component={Procurar}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}