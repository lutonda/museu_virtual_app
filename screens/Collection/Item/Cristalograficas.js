import React, { Component } from 'react';
import {
    View, StyleSheet, Image, Text,
    ScrollView, ImageBackground
} from 'react-native'

import style from './style'

var Item
class Cristalograficas extends Component {
    constructor(props) {
        super(props)
        Item = this.props.Item
    }
    render() {
        return (
            <ScrollView style={style.content} >
                    <View style={style.row}>
                        <Text style={style.text}>Descricao</Text>
                        <Text style={style.value}>{Item.idpropriedadecristalografica.nome}</Text>
                    </View>
                    <View style={style.row}>
                        <Text style={style.default}></Text>
                        <Text style={style.value}>{Item.idpropriedadecristalografica.descricao}</Text>
                    </View>
            </ ScrollView>
        )
    }
}

export default Cristalograficas