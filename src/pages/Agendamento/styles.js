import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    containerAgendamentos: {
       
        marginVertical: '5%',
        alignItems: 'flex-end',
        paddingRight: 15,
       
    },
    LinkAgendamento: {
        borderBottomColor: '#faaaee',
        borderBottomWidth: 2,
    },
    textAgendamento: {
        fontSize: 16,
        color: '#faaaee',
        fontStyle: 'italic'
    },

    containerPreco: {
      flex: 1,
      alignItems: 'center',
     
    },
    textPreco: {
        fontSize: 25,
        color: '#222',
       
    },
    containerListaPrecos:{
        width: '80%',
        marginTop: 20,
        paddingHorizontal: 10,
        
        
    },
    constaineComponentLista: {
        width: '90%',
        height: 50,
        borderWidth: 3,
        borderColor: '#faaaee',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
       
        marginBottom: 10
    },
    textComponentLista: {
        fontSize: 16,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color:'#faaaee'
    }

});