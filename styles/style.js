import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    content: {
        backgroundColor:'#f0efeb',
        height: 200,
        justifyContent: "center",
        alignItems:'center'
    },
    cont1: {
        justifyContent: "center",
        alignItems:'center'
    },
    rodape:{
        backgroundColor:'#a5a58d',
        height: 30,
        padding: 25,
        justifyContent: "center",
        alignItems:'center',
        marginTop:30
    }, 
    meio:{
        backgroundColor:'#ddbea9',
        height: 200,
        justifyContent: "center",
        alignItems:'center'
    },

    cont: {
        flex: 1,
        backgroundColor:'#eddcd2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        marginTop: 20, 
        width: 380,
        margin: 5,
        fontWeight:'bold',
        fontSize:30,
        textAlign: 'center'

    },
    autor: {
        justifyContent: "center",
        alignItems:'center',
        fontWeight:'bold',
        textAlign:"center"
    },
    conteudo: {
        justifyContent: "center",
        alignItems:'center',
        textAlign: 'justify'
    },
    info: {
        width: 380,
        justifyContent: "center",
        alignItems:'center'
    },
    resultado:{
        margin: 5,
        height: 60,
        width: 380,
        justifyContent: "center",
        alignItems:'center',
        fontWeight:'bold',
        textAlign:"center",
        fontSize:17,
        flexDirection:"row" 
    },
    conf7:{
        margin: 5,
        marginBottom:50,
        width: 380,
        height: 40,
        alignItems:'center',
        textAlign:"center",
        fontWeight:'bold',
        fontSize:30,
        borderWidth:2,
        borderRadius:5,
        flexDirection:"row" 
    }

})