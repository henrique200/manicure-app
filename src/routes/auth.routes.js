import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import TelaInicial from '../pages/TelaInicial'
import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Agendamento from '../pages/Agendamento'
import Agendamento2 from '../pages/Agendamento2'

const Stack = createStackNavigator();

function AuthStack() {
    return(
        <Stack.Navigator>
           <Stack.Screen name="Tela Inicial" component={TelaInicial} options={{headerShown: false}} />
           <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
           <Stack.Screen name="Sobre Mim" component={Sobre}  />
           <Stack.Screen name="Apresentação de Preços e Agendamento" component={Agendamento}  />
           <Stack.Screen name=" Agendamento de Horario" component={Agendamento2}  />
        </Stack.Navigator>
    );
}

export default AuthStack;