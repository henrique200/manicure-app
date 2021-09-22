import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    containerImage:{
        marginVertical: '20%',
        

    },
    Image: {
        width: 300,
        height: 300,
        
    },

    containerButton: {
        flex: 1,
        justifyContent: 'center',   
    },

    buttom: {
        width: '90%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#faaaee',
        borderRadius: 30,
        paddingHorizontal:20
    },

    textButtom: {
        fontSize: 16,
        color: '#222',
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: 'italic',
    },
    textInfo:{
        fontSize: 25,
        fontStyle: 'italic', 
        color: '#faaaee',
        fontWeight: 'bold'
    }


});