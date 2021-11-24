import React, { useState } from 'react'
import { Text, View, TextInput, Button } from 'react-native';

export default function Formulario () {
    const [cep, onChangeCep] = useState('')
    const [cidade, onChangeCidade] = useState('')

    const handleConsultar = () => {
        onChangeCidade(cep)
    }

    return(
        <View>
            <Text>Digite um CEP (somente números):</Text>
            <TextInput value={cep} onChangeText={onChangeCep} />
            <Button title="Consultar" onPress={handleConsultar} />
            
            <text>{cidade}</text>   
        </View>
    )
}