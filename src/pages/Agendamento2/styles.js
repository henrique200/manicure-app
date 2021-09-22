import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    text: {
        marginVertical: '10%',
        paddingHorizontal: 15,
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#222'
    },
    input: {
        width: '80%',
        height: '70%',
        borderWidth: 2,
        borderColor: '#faaaee',
        paddingHorizontal: 10,
        borderRadius: 30,
        fontSize: 16,
        color: '#222'
    },
    containerInput: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    botaoAgendar: {
        width: '80%',
        height: 50,
        borderWidth: 2,
        borderColor: '#faaaee',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginBottom: 20,
    },

    textAgendar:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#222'
    }
});