import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    ScrollView,
    ImageBackground,
    RefreshControl,
    ActivityIndicator,
    TouchableOpacity,
    AsyncStorage,
    Alert
} from 'react-native';

import { FlatGrid } from 'react-native-super-grid';
import { Col, Row, Grid } from "react-native-easy-grid";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment'
import 'moment-timezone';
import 'moment/locale/pt-br';
import { AuthContext } from '../../components/context';

moment.tz.setDefault('Africa/Luanda');
moment.locale('pt-BR');
//moment.locale('pt',momentPTBR );

class EventDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {},
            refreshing: false,
            event: this.props.route.params.event
        };
        this.user()
    }
    user() {
        var user = AsyncStorage.getItem('userToken').then(user => {
            this.setState({ user: JSON.parse(user) })
            return user
        });
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
                    <ImageBackground source={{ uri: 'http://192.168.100.17:7000/uploads/brochures/covers/' + this.state.event.cover }} style={styles.imageBackground}>
                        <View style={[styles.itemContainer]}>
                            <Text style={styles.itemName, { fontSize: 36, color: '#FFF', fontWeight: '900' }}>{this.state.event.title}</Text>
                            <Text style={styles.itemCode}>{this.state.event.category.title}</Text>
                        </View>
                    </ImageBackground>

                </Row>
                <Row size={1}>
                    <ScrollView>
                        <Text style={{ padding: 15 }}>{this.state.event.descriptions}</Text>
                    </ScrollView>
                </Row>
                <Row size={1}>
                    {this.state.event.shedules.length > 0 ?
                        <FlatGrid

                            horizontal={true}
                            scrollEnabled
                            showsHorizontalScrollIndicator={false}
                            itemDimension={130}
                            data={this.state.event.shedules}
                            style={styles.gridView}
                            // staticDimension={300}
                            // fixed
                            spacing={10}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("Eventi", { event: item })}>
                                    <View style={[styles.sheduleContainer]}>
                                        <Text style={styles.itemName, { fontSize: 16 }}>
                                            {
                                                this.formatDate(item.date, "dddd")
                                            }
                                        </Text>

                                        <Text style={styles.itemName, { fontSize: 12 }}>
                                            {
                                                this.formatDate(item.date, "DD") + " de " +
                                                this.formatDate(item.date, "MMMM") + " de " +
                                                this.formatDate(item.date, "YYYY")
                                            }
                                        </Text>
                                        <Text style={styles.itemName, { fontSize: 36 }}>
                                            {
                                                this.formatDate(item.date, "hh:mm")
                                            }
                                        </Text>
                                        {item.local ?
                                        <TouchableOpacity style={{flex: 1,justifyContent: 'center',alignItems: 'center',}}>
                                        <Icon name="map-marker"/>
                                            <Text>
                                                { item.local.address }
                                            </Text>
                                        </TouchableOpacity>
                                        :<Text></Text>}
                                        <Text style={styles.itemCode}>{item.code}</Text>
                                        {this.isSubscribed(item)
                                            ? <Button title="INSCRITO">INSCRITO</Button>
                                            : <Button color="#17a2b8" onPress={() => this.subscribe(item)} title="Inscrever-se">Inscrever-se</Button>
                                        }
                                    </View>
                                </TouchableOpacity>
                            )}
                        /> : <Text style={{ fontSize: 36, flex: 1, textAlign: 'center' }}>B R E V E M E N T E</Text>}
                </Row>
                <Row size={1}>
                    
                        <FlatGrid
                            horizontal={true}
                            scrollEnabled
                            showsHorizontalScrollIndicator={false}
                            itemDimension={130}
                            data={this.state.event.speakers}
                            style={styles.gridView}
                            // staticDimension={300}
                            // fixed
                            spacing={10}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("Eventi", { event: item })}>
                                    <View style={[styles.sheduleContainer]}>
                                        <ImageBackground source={{ uri: 'http://192.168.100.17:7000/uploads/brochures/speakers/'+item.avatar }} style={styles.imageBackground}>
                                            <View style={[styles.itemContainer]}>
                                                
                                            </View>
                                        </ImageBackground>
                                        <Text style={styles.itemName, { fontSize: 16 }}>{item.title + ' '+ item.name}</Text>
                                        <Text style={styles.itemName, { fontSize: 12 }}>{item.roles}</Text>
                                        
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
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

export default EventDetails;
