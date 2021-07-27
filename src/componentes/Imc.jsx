import React,{useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import { styles } from "../../styles/style"


export default function Imc(){
    const[imc, setImc] = useState(
        {
            peso:0, 
            altura:0, 
            subtotal: 0,
            resposta: ""
        }
    )

    const handleInputChange = (name, value) => {
        setImc({
            ...imc, [name]:value
        })
    }

    const c = () => {
        if(imc.peso == 0 || imc.altura == 0){
            setImc({
                ...imc, resposta:"Seu problema é dimensional!"
            })
        } else{        
            let imcC = (imc.peso/(imc.altura**2)).toFixed(2)
            console.log(imcC)
    
            if(imcC < 18.5){
                setImc({
                    ...imc, subtotal: imcC +"kg/m²", resposta:"Fadiga, stress, ansiedade. Vai comer algo"
                })
            }else if(imcC >= 18.5 && imcC < 25){
                setImc({
                    ...imc, subtotal: imcC +"kg/m²", resposta:"Menor risco de doenças cardíacas e vasculares. Vida chata a sua"
                })
            } 
            else{
                setImc({
                    ...imc, subtotal: imcC +"kg/m²", resposta:"Fadiga, má circulação, varizes. Resumindo: vida feliz"
                })
            }}

    }

    return(
        <View>
            <Text style={styles.titulo}>Calcule o seu IMC</Text>
            <Text style={styles.resultado}>Resultado: {imc.subtotal}</Text>
            <Text style={styles.resultado}>{imc.resposta}</Text>
            
            <TextInput 
                placeholder="Seu peso"  
                onChangeText={(valor)=> handleInputChange("peso", Number(valor))}
                keyboardType="numeric"
                style={styles.conf7}
            />
            <TextInput 
                placeholder="Sua altura"  
                onChangeText={(valor)=> handleInputChange("altura", Number(valor))}
                keyboardType="numeric"
                style={styles.conf7}
            />

            <Button title="Calcular IMC" color="#123321" 
                onPress={c}
             />
        </View>
    )
}