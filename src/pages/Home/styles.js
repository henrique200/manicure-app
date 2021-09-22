import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    header: {
        marginVertical: '9%',
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: '#faaaee',
        
    },
    component1: {
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft: '5%'
    },
    textComponent1: {
        color: '#222',
        fontSize: 18,
        fontWeight: 'bold'
    },

    component2: {
        flex: 1,
        alignItems: 'flex-end',
        padding: 10
        
    },
    textComponent2: {
        color: '#222',
        fontSize: 18,
        fontWeight: 'bold'
    },

    component3: {
       
        alignItems: 'flex-end',
       
    },
    textComponent3: {
        color: '#222',
        fontSize: 18,
        fontWeight: 'bold'
    },

    containerApresentacao: {
        marginVertical: '10%'
    },
    textApresentacao:{
        fontSize: 25,
        color: '#222',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    image: {
       width: 300,
       height: 200,
       borderRadius: 30,
       marginBottom: 10
    }
});