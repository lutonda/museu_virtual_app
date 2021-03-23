import React, { Component } from 'react';
import {
    View, StyleSheet, Image, Text,
    ScrollView, ImageBackground
} from 'react-native'

import style from './style'

var Item
class Quimicas extends Component {
    constructor(props) {
        super(props)
        Item = this.props.Item
    }
    render() {
        return (
            <ScrollView style={style.content} >
                    <View style={style.row}>
                        <Text style={style.text}>Descricao</Text>
                        <Text style={style.value}>{Item.idpropriedadequimica.descricao}</Text>
                    </View>
                    <View style={style.row}>
                        <Text style={style.text}>Esfervescencia</Text>
                        <Text style={style.value}>{Item.idpropriedadequimica.esfervescencia}</Text>
                    </View>
                    <View style={style.row}>
                        <Text style={style.text}>Florescencia</Text>
                        <Text style={style.value}>{Item.idpropriedadequimica.florescencia}</Text>
                    </View>
                    <View style={style.row}>
                        <Text style={style.text}>Composição</Text>
                        <Text style={style.value}>{Item.composicaoquimico.map((quimico)=> quimico.nome+'['+quimico.simbolo+']')}</Text>
                    </View>
            </ ScrollView>
        )
    }
}

export default Quimicas