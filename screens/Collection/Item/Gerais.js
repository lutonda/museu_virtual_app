import React, { Component } from 'react';
import {
    View, StyleSheet, Image, Text,
    ScrollView, ImageBackground
} from 'react-native'

import style from './style'

var Item
class Gerais extends Component {
    constructor(props) {
        super(props)
        Item = this.props.Item
    }
    render() {
        return (
            <ScrollView style={style.content} >
                    <View style={style.row}>
                        <Text style={style.text}>Nome</Text>
                        <Text style={style.value}>{Item.nome}</Text>
                    </View>
                    <View style={style.row}>
                        <Text style={style.text}>Importância</Text>
                        <Text style={style.value}>{Item.importacia}</Text>
                    </View>
                    <View style={style.row}>
                        <Text style={style.text}>Características</Text>
                        <Text style={style.value}>{Item.caraceristica}</Text>
                    </View>
                    <View style={style.row}>
                        <Text style={style.text}>Aplicação</Text>
                        <Text style={style.value}>{Item.aplicacao}</Text>
                    </View>
                    <View style={style.row}>
                        <Text style={style.text}>Gênese</Text>
                        <Text style={style.value}>{Item.genese.nome}</Text>
                    </View>
                    <View style={style.row}>
                        <Text style={style.default}></Text>
                        <Text style={style.value}>{Item.genese.descricao}</Text>
                    </View>
                    <View style={style.row}>
                        <Text style={style.text}>Categoria</Text>
                        <Text style={style.value}>{Item.idcategoria.nome} > {Item.idcategoria.dependencia.nome}</Text>
                    </View>
                    <View style={style.row}>
                        <Text style={style.text}>Prateleira</Text>
                        <Text style={style.value}>{Item.idprateleira.codigo}, Secção {Item.idprateleira.idseccao.codigo}</Text>
                    </View>
            </ ScrollView>
        )
    }
}

export default Gerais