import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export const Home = () => {

    const navigation = useNavigation();

    return(
        <View style={styles.container}>

           <View style={styles.header}>
                <View style={styles.component1}>
                    <Text style={styles.textComponent1}>Home</Text>
                </View>

                <View styles={styles.component2}>
                   <TouchableOpacity style={{paddingHorizontal: 30}} onPress={() => navigation.navigate('Sobre Mim')}>
                            <Text style={styles.textComponent2}>Sobre</Text>
                   </TouchableOpacity>
                </View>  

                <View style={styles.component3}>
                   <TouchableOpacity style={{paddingHorizontal: 15}} onPress={() => navigation.navigate('Apresentação de Preços e Agendamento')}>
                            <Text style={styles.textComponent3}>Agendamentos</Text>
                   </TouchableOpacity>
                </View>  
           </View>


           <View style={styles.containerApresentacao}>
               
                    <Text style={styles.textApresentacao}>Tipos de Trabalhos que Faço</Text>
               
           </View>
            <ScrollView
             showsVerticalScrollIndicator={false}
            >
                <Image style={styles.image} source={require('../../Imagens/manicurePedicure.jpg')}/>
                <Image style={styles.image} source={require('../../Imagens/manicurePedicure.jpg')}/>
                <Image style={styles.image} source={require('../../Imagens/manicurePedicure.jpg')}/>
                <Image style={styles.image} source={require('../../Imagens/manicurePedicure.jpg')}/>
                <Image style={styles.image} source={require('../../Imagens/manicurePedicure.jpg')}/>
                <Image style={styles.image} source={require('../../Imagens/manicurePedicure.jpg')}/>
                <Image style={styles.image} source={require('../../Imagens/manicurePedicure.jpg')}/>
                <Image style={styles.image} source={require('../../Imagens/manicurePedicure.jpg')}/>
                <Image style={styles.image} source={require('../../Imagens/manicurePedicure.jpg')}/>
                <Image style={styles.image} source={require('../../Imagens/manicurePedicure.jpg')}/>
                <Image style={styles.image} source={require('../../Imagens/manicurePedicure.jpg')}/>
                <Image style={styles.image} source={require('../../Imagens/manicurePedicure.jpg')}/>
                <Image style={styles.image} source={require('../../Imagens/manicurePedicure.jpg')}/>
                <Image style={styles.image} source={require('../../Imagens/manicurePedicure.jpg')}/>
                <Image style={styles.image} source={require('../../Imagens/manicurePedicure.jpg')}/>
                <Image style={styles.image} source={require('../../Imagens/manicurePedicure.jpg')}/>
                <Image style={styles.image} source={require('../../Imagens/manicurePedicure.jpg')}/>
                <Image style={styles.image} source={require('../../Imagens/manicurePedicure.jpg')}/>
               
                
            </ScrollView>
        </View>
    );
}

export default Home;