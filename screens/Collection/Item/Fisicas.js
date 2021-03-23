import React, { Component } from 'react';
import {
    View, StyleSheet, Image, Text,
    ScrollView,
} from 'react-native'

import style from './style'

var Item
class Fisicas extends Component {
    constructor(props) {
        super(props)
        Item=this.props.Item
    }
    render() {
        return (
            <ScrollView style={style.content} >
                <View style={style.row}>
                    <Text style={style.text}>Nome</Text>
                    <Text style={style.value}>{Item.idpropriedadefisica.descricao}</Text>
                </View>
                <View style={style.row}>
                    <Text style={style.text}>Clivagem</Text>
                    <Text style={style.value}>{Item.idpropriedadefisica.clivagem.nome}</Text>
                </View>
                <View style={style.row}>
                    <Text style={style.default}></Text>
                    <Text style={style.value}>{Item.idpropriedadefisica.clivagem.descricao}</Text>
                </View>
                <View style={style.row}>
                    <Text style={style.text}>Paladar</Text>
                    <Text style={style.value}>{Item.idpropriedadefisica.paladar}</Text>
                </View>
                <View style={style.row}>
                    <Text style={style.text}>Tácto</Text>
                    <Text style={style.value}>{Item.idpropriedadefisica.tacto}</Text>
                </View>
                <View style={style.row}>
                    <Text style={style.text}>Olfacto</Text>
                    <Text style={style.value}>{Item.idpropriedadefisica.olfato}</Text>
                </View>
                <View style={style.row}>
                    <Text style={style.text}>Peso(g)</Text>
                    <Text style={style.value}>{Item.idpropriedadefisica.peso}</Text>
                </View>
                <View style={style.row}>
                    <Text style={style.text}>Brilho</Text>
                    <Text style={style.value}>{Item.idpropriedadefisica.idbrilho.nome}</Text>
                </View>
                <View style={style.row}>
                    <Text style={style.default}></Text>
                    <Text style={style.value}>{Item.idpropriedadefisica.idbrilho.descricao}</Text>
                </View>
                <View style={style.row}>
                    <Text style={style.text}>Densidade</Text>
                    <Text style={style.value}>{Item.idpropriedadefisica.iddensidade.descricao}</Text>
                </View>
                <View style={style.row}>
                    <Text style={style.default}>Máxima</Text>
                    <Text style={style.value}>{Item.idpropriedadefisica.iddensidade.densidademaxima}</Text>
                </View>
                <View style={style.row}>
                    <Text style={style.text}>Mínima</Text>
                    <Text style={style.value}>{Item.idpropriedadefisica.iddensidade.densidademinima}</Text>
                </View>
                <View style={style.row}>
                    <Text style={style.text}>Dureza</Text>
                    <Text style={style.value}>{Item.idpropriedadefisica.iddureza.descricao}</Text>
                </View>
                <View style={style.row}>
                    <Text style={style.default}>Máxima</Text>
                    <Text style={style.value}>{Item.idpropriedadefisica.iddureza.maxima}</Text>
                </View>
                <View style={style.row}>
                    <Text style={style.text}>Mínima</Text>
                    <Text style={style.value}>{Item.idpropriedadefisica.iddureza.minima}</Text>
                </View>
                <View style={style.row}>
                    <Text style={style.text}>Diafaniedade</Text>
                    <Text style={style.value}>{Item.idpropriedadefisica.iddiafagilidade.nome}</Text>
                </View>
                <View style={style.row}>
                    <Text style={style.default}></Text>
                    <Text style={style.value}>{Item.idpropriedadefisica.iddiafagilidade.descricao}</Text>
                </View>
                <View style={style.row}>
                    <Text style={style.text}>Habito</Text>
                    <Text style={style.value}>{Item.idpropriedadefisica.idhabito.nome}</Text>
                </View>
                <View style={style.row}>
                    <Text style={style.default}></Text>
                    <Text style={style.value}>{Item.idpropriedadefisica.idhabito.descricao}</Text>
                </View>
                <View style={style.row}>
                    <Text style={style.text}>Espeçura</Text>
                    <Text style={style.value}>{Item.idpropriedadefisica.idmedida.espessura}</Text>
                </View>
                <View style={style.row}>
                    <Text style={style.text}>Largura</Text>
                    <Text style={style.value}>{Item.idpropriedadefisica.idmedida.largura}</Text>
                </View>
                <View style={style.row}>
                    <Text style={style.text}>Altura</Text>
                    <Text style={style.value}>{Item.idpropriedadefisica.idmedida.altura}</Text>
                </View>
                <View style={style.row}>
                    <Text style={style.text}>Comprimento</Text>
                    <Text style={style.value}>{Item.idpropriedadefisica.idmedida.comprimento}</Text>
                </View>
                <View style={style.row}>
                    <Text style={style.text}>Ocorência</Text>
                    <Text style={style.value}>{Item.idpropriedadefisica.idocorencia.nome}</Text>
                </View>
                <View style={style.row}>
                    <Text style={style.default}></Text>
                    <Text style={style.value}>{Item.idpropriedadefisica.idocorencia.descricao}</Text>
                </View>
            </ ScrollView>
        )
    }
}

export default Fisicas