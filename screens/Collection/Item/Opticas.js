import React, { Component } from 'react';
import {
    View, StyleSheet, Image, Text,
    ScrollView, ImageBackground
} from 'react-native'

import style from './style'

var Item
class Opticas extends Component {
    constructor(props) {
        super(props)
        Item = this.props.Item

    }
    render() {
        return (
            <ScrollView style={style.content} >
                <View style={style.row}>
                    <Text style={style.text}>descricao</Text>
                    <Text style={style.value}>{Item.idpropriedadeoptica.descricao}</Text>
                </View>
                <View style={style.row}>
                    <Text style={style.text}>Clivagem</Text>
                    <Text style={style.value}>{Item.idpropriedadeoptica.idnicoiscruzados.clivagem.map((clivagem) => clivagem.idclivagem.nome)}</Text>
                </View>
                <View style={style.row}>
                    <Text style={style.text}>Cor Interferencia</Text>
                    <View style={[style.value,{flexDirection:'row'}]}>{Item.idpropriedadeoptica.idnicoiscruzados.corinterferencia.map((cor) => <View style={{ padding:2,borderWidth:1,borderRadius:3, backgroundColor: cor.idcor.hex }}><Text>{cor.idcor.nome}</Text></View>)}</View>
                    </View>
                    <View style={style.row}>
                        <Text style={style.text}>Fractura</Text>
                        <Text style={style.value}>{Item.idpropriedadeoptica.idnicoiscruzados.fractura.map((fractura) => fractura.idfractura.nome)}</Text>
                    </View>
                    <View style={style.row}>
                        <Text style={style.text}>Extinção</Text>
                        <Text style={style.value}>{Item.idpropriedadeoptica.idnicoiscruzados.extincao}</Text>
                    </View>
                    <View style={style.row}>
                        <Text style={style.text}>Berifragência</Text>
                        <Text style={style.value}>{Item.idpropriedadeoptica.idnicoiscruzados.idberifragencia.nome}</Text>
                    </View>
                    <View style={style.row}>
                        <Text style={style.default}></Text>
                        <Text style={style.value}>{Item.idpropriedadeoptica.idnicoiscruzados.idberifragencia.descricao}</Text>
                    </View>
                    <View style={style.row}>
                        <Text style={style.text}>ELongação</Text>
                        <Text style={style.value}>{Item.idpropriedadeoptica.idnicoiscruzados.idsinaiselongacao.nome}</Text>
                    </View>
                    <View style={style.row}>
                        <Text style={style.default}></Text>
                        <Text style={style.value}>{Item.idpropriedadeoptica.idnicoiscruzados.idsinaiselongacao.descricao}</Text>
                    </View>
                    <Text>Nicois Paralelos</Text>
                    <View style={style.row}>
                        <Text style={style.text}>Extinção</Text>
                        <Text style={style.value}>{Item.idpropriedadeoptica.idnicoisparalelos.extincao}</Text>
                    </View>
                    <View style={style.row}>
                        <Text style={style.text}>Pleocroismo</Text>
                        <Text style={style.value}>{Item.idpropriedadeoptica.idnicoisparalelos.pleocroismo}</Text>
                    </View>
                    <View style={style.row}>
                        <Text style={style.text}>Hábito</Text>
                        <Text style={style.value}>{Item.idpropriedadeoptica.idnicoisparalelos.idhabito.nome}</Text>
                    </View>
                    <View style={style.row}>
                        <Text style={style.default}></Text>
                        <Text style={style.value}>{Item.idpropriedadeoptica.idnicoisparalelos.idhabito.descricao}</Text>
                    </View>
                    <View style={style.row}>
                        <Text style={style.text}>Relevo</Text>
                        <Text style={style.value}>{Item.idpropriedadeoptica.idnicoisparalelos.idrelevo.nome}</Text>
                    </View>
                    <View style={style.row}>
                        <Text style={style.default}></Text>
                        <Text style={style.value}>{Item.idpropriedadeoptica.idnicoisparalelos.idrelevo.descricao}</Text>
                    </View>
                    <View style={style.row}>
                        <Text style={style.text}>ELongação</Text>
                        <Text style={style.value}>{Item.idpropriedadeoptica.idnicoisparalelos.idsinaiselongacao.nome}</Text>
                    </View>
                    <View style={style.row}>
                        <Text style={style.default}></Text>
                        <Text style={style.value}>{Item.idpropriedadeoptica.idnicoisparalelos.idsinaiselongacao.descricao}</Text>
                    </View>
                    
            </ ScrollView>
                )
            }
        }
        
export default Opticas