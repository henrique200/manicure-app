import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native';
import { styles } from './styles';

const Sobre = () => {
    return(
        <View style={styles.container}>
           <ScrollView>
                <View style={styles.containerSobre}>
                    <View style={styles.containerSobreMim}>
                            <View style={styles.containerImage}>
                                <Image
                                style={styles.image}
                                source={require('../../Imagens/unnamed.jpg')}
                                />
                            </View>
                        <Text style={styles.textSobre}>
                            Meu nome é Elenilda e sou manicure e pedicure há alguns anos, atendo no meu próprio salão.

                        </Text>
                    </View>
                    
                </View>
           </ScrollView>
        </View>
    );
}

export default Sobre;