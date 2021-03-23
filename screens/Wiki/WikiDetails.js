import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    ScrollView,
    ImageBackground,
    Alert,
    useWindowDimensions
} from 'react-native';

import { Col, Row, Grid } from "react-native-easy-grid";
import HTML from "react-native-render-html";

import moment from 'moment'
import 'moment-timezone';
import 'moment/locale/pt-br';


moment.tz.setDefault('Africa/Luanda');
moment.locale('pt-BR');
//moment.locale('pt',momentPTBR );

class WikiDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {},
            refreshing: false,
            wiki: this.props.route.params.wiki
        };
    }
    formatDate = (date, format) => moment(date).format(format);
    componentDidMount() {
        debugger
        //console.log("NAV: ", this.props.navigation)
        //alert(this.props.navigation.state.getParam('aka'))
        //this.getData()
    }
    isSubscribed = (shedule) => shedule.subscription.filter(s => s.user.id === this.state.user.id).length > 0
    subscribe(shedule) {
        //Service to get the data from the server to render
        fetch('http://192.168.100.17:7000/api/events/shedule/subscribe/' + shedule.id + '/' + this.state.user.id)
            .then((response) => response.json())
            .then((json) => {
                
                Alert.alert('Inscrição!', 'A sua Inscrição feita com sucesso.', [
                    { text: 'Fechar' }
                ]);
                var event=this.state.event
                event.shedules.filter(s=>s.id===shedule.id)[0].subscription.push(json)//filter(s=>s.id==))
                this.setState({event:event})
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        return (
            <Grid>
                <Row size={1}>
                    <ImageBackground source={{ uri: 'http://192.168.100.17:7000/uploads/brochures/wikies/' + this.state.wiki.cover }} style={styles.imageBackground}>
                        <View style={[styles.itemContainer]}>
                            <Text style={styles.itemName, { fontSize: 36, color: '#FFF', fontWeight: '900' }}>{this.state.wiki.title}</Text>
                            <Text style={styles.itemCode}>{this.state.wiki.tags[0].title}</Text>
                        </View>
                    </ImageBackground>

                </Row>
                <Row size={2} style={{padding:15}}>
                    <ScrollView>
                        <HTML style={{ padding: 15 }} originWhitelist={['*']}
                        source={{ html: this.state.wiki.descriptions }}/>
                    </ScrollView>
                </Row>
                
            </Grid>


        );
    }
}
const styles = StyleSheet.create({
    gridView: {
        marginTop: 10,
        flex: 1,
        backgroundColor: '#eee'
    },
    sheduleContainer: {
        justifyContent: 'center',
        borderRadius: 5,
        padding: 10,
        height: 150,
        backgroundColor: '#FFF',
        textAlign: 'center'
    },
    itemName: {
        fontSize: 36,
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }
});

export default WikiDetails;
