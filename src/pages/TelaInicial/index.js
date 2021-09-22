import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

const TelaInicial = () => {

    const navigation = useNavigation();

    return(
        <View style={styles.constainer}>

          <View style={styles.containerImage}>
              <Image
              source={require('../../Imagens/logoManicure.png')}
              style={styles.Image}
              />
          </View>

          <View>
              <Text style={styles.textInfo}>Manicure e Pedicure</Text>
          </View>

          <View style={styles.containerButton}>
              <TouchableOpacity style={styles.buttom} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.textButtom}>
                        Seja Bem-Vindo(a), Clique para entrar no app
                    </Text>
              </TouchableOpacity>
          </View>
        </View>
    );
}

export default TelaInicial;