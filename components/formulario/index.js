import React, { useState } from 'react'
import { Text, View, TextInput, Button } from 'react-native';

export default function Formulario () {
    const [cep, onChangeCep] = useState('')
    const [cidade, onChangeCidade] = useState('')

    const handleConsultar = () => {
        const url = 'https://viacep.com.br/ws/' + cep + '/json/'
        fetch(url, {
            method:'GET',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
            }
        }).then(function(response){
            response.json().then(function(data){
            onChangeCidade(data['localidade'])
        })
    })
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