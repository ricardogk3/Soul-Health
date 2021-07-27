import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { styles } from "../../styles/style"

export default function Informacao(props){

    return(
        <View style={styles.info}>
            <Text style={styles.titulo}>{props.titulo}</Text>
            <Text style={styles.autor}>{props.autor} </Text>
            <Text style={styles.postado}>{props.postado} </Text>
            <Text style={styles.conteudo}>      {props.conteudo} </Text>
        </View>
    )

}