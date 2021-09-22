import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, Linking } from 'react-native';
import { styles } from './styles';

const Agendamento2 = () => {

    const [agendar, setAgendar] = useState();

    function msg(){
        Linking.canOpenURL(`whatsapp://send?text=${agendar}`).then(supported => {
    if (supported) {
      return Linking.openURL(
        `whatsapp://send?phone=5511983130793&text=${agendar}`
      );
    } else {
      return Linking.openURL(
        `whatsapp://send?phone=5511983130793&text=${agendar}`
      );
    }
  })
    }

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Text style={styles.text}>
                    Para Agendar um Horario, Apresente-se e entre em contato conosco através dos campos abaixo!
                </Text>
                <KeyboardAvoidingView style={{flex: 1, width: '80%', height: '70%', alignItems: 'center'}}>
                <View style={styles.containerInput}> 
                    <TextInput
                    style={styles.input}
                    placeholder='Digite Aqui....'
                    value={agendar}
                    onChangeText={(text) => setAgendar(text)}
                    />
                </View>

                <TouchableOpacity style={styles.botaoAgendar} onPress={msg}>
                    <Text style={styles.textAgendar}>Agendar</Text>
                </TouchableOpacity>
                </KeyboardAvoidingView>
                
        </View>
        </TouchableWithoutFeedback>
        
    );
}

export default Agendamento2;