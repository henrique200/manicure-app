import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

const Agendamento = () => {

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
           <View style={styles.containerAgendamentos}>
               <TouchableOpacity style={styles.LinkAgendamento} onPress={() => navigation.navigate(' Agendamento de Horario')}>
                   <Text style={styles.textAgendamento}>Agende um Horario Aqui!</Text>
               </TouchableOpacity>
           </View>

           <View style={styles.containerPreco}>
               <Text style={styles.textPreco}>Nossos Preços e Promoções</Text>
               <ScrollView
                style={styles.containerListaPrecos}
                showsVerticalScrollIndicator={false}
                >
               
               <View style={styles.constaineComponentLista}>
                       <Text style={styles.textComponentLista}>Mão: R$ 20,00</Text>
                   </View>
                   <View style={styles.constaineComponentLista}>
                       <Text style={styles.textComponentLista}>Mão: R$ 20,00</Text>
                   </View>
                   <View style={styles.constaineComponentLista}>
                       <Text style={styles.textComponentLista}>Mão: R$ 20,00</Text>
                   </View>
                   <View style={styles.constaineComponentLista}>
                       <Text style={styles.textComponentLista}>Mão: R$ 20,00</Text>
                   </View>
                   <View style={styles.constaineComponentLista}>
                       <Text style={styles.textComponentLista}>Mão: R$ 20,00</Text>
                   </View>
                   <View style={styles.constaineComponentLista}>
                       <Text style={styles.textComponentLista}>Mão: R$ 20,00</Text>
                   </View>
                   <View style={styles.constaineComponentLista}>
                       <Text style={styles.textComponentLista}>Mão: R$ 20,00</Text>
                   </View>
                   <View style={styles.constaineComponentLista}>
                       <Text style={styles.textComponentLista}>Mão: R$ 20,00</Text>
                   </View>
                   <View style={styles.constaineComponentLista}>
                       <Text style={styles.textComponentLista}>Mão: R$ 20,00</Text>
                   </View>
                   <View style={styles.constaineComponentLista}>
                       <Text style={styles.textComponentLista}>Mão: R$ 20,00</Text>
                   </View>
                   <View style={styles.constaineComponentLista}>
                       <Text style={styles.textComponentLista}>Mão: R$ 20,00</Text>
                   </View>
                   <View style={styles.constaineComponentLista}>
                       <Text style={styles.textComponentLista}>Mão: R$ 20,00</Text>
                   </View>
                   <View style={styles.constaineComponentLista}>
                       <Text style={styles.textComponentLista}>Mão: R$ 20,00</Text>
                   </View>
                   
                   <View style={styles.constaineComponentLista}>
                       <Text style={styles.textComponentLista}>Mão: R$ 20,00</Text>
                   </View>
                   <View style={styles.constaineComponentLista}>
                       <Text style={styles.textComponentLista}>Mão: R$ 20,00</Text>
                   </View>
                   <View style={styles.constaineComponentLista}>
                       <Text style={styles.textComponentLista}>Mão: R$ 20,00</Text>
                   </View>
               
                   
                   
               </ScrollView>
           </View>


          
        </View>
    );
}

export default Agendamento;